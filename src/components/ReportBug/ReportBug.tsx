import React, { FC, useState, ChangeEvent, FormEvent, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading,
  Flex,
  Input,
  Textarea,
  Text,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineBug } from "react-icons/ai";

import { toggleReportBugVis } from "../../store/actionCreators";
import { sleep } from "../../utils/helpers/time";
import { expressApi } from "../../lib/axios";
import { toast } from "react-toastify";

interface Props {
  isOpen: boolean;
}
type InputEvent = ChangeEvent<HTMLInputElement>;
type TextAreaEvent = ChangeEvent<HTMLTextAreaElement>;
type FormTypeEvent = FormEvent<HTMLFormElement>;

const ReportBug: FC<Props> = ({ isOpen }) => {
  const notifySuccess = (message: string) => toast.success(message);
  const notifyError = (message: string) => toast.error(message);

  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [description, setDescrition] = useState<string>("");
  const [loading, setLoading] = useState(false);

  //this will came from the api
  const [reportNum, setReportNum] = useState<number>(1);

  const dispatch = useDispatch();
  const { ipAdress } = useSelector((state: StoreState) => state);

  const handleCloseModal = () => {
    dispatch(toggleReportBugVis(false));
  };
  const handleInputChanged = (e: InputEvent) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handleTextAreaChanged = (e: TextAreaEvent) => {
    setDescrition(e.target.value);
  };
  const handleGetReportNumber = async (signal?: any): Promise<any> => {
    try {
      const response = await expressApi.get("/feedback/bugs-reports", signal);
      const { reportNumber } = response.data;
      setReportNum(reportNumber);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmitForm = async (e: FormTypeEvent): Promise<any> => {
    e.preventDefault();
    if (!name) {
      setError("Please set a name for your Report");
      await sleep(2);
      setError("");
      return;
    }
    const data = {
      name,
      description,
      number: reportNum,
      ipAdress,
    };
    setLoading(true);
    try {
      const response = await expressApi.post("/feedback/bugs-reports", data);
      const { message, status } = response.data;
      if (status === "fail") {
        notifyError(message);
        setLoading(false);
        return;
      }
      setName("");
      setDescrition("");
      setLoading(false);
      notifySuccess(message);
      handleGetReportNumber();
    } catch (error) {
      setLoading(false);
      console.log(error);
      notifyError("Something went wrong, please try again later");
    }
  };
  useEffect(() => {
    const { signal, abort } = new AbortController();
    handleGetReportNumber(signal);

    return () => abort();
  }, []);
  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <ModalOverlay />
      <ModalContent>
        <form
          onSubmit={handleSubmitForm}
          style={{
            padding: "2rem",
          }}
        >
          <Flex align="center" m="2rem 0">
            <AiOutlineBug
              size={35}
              style={{
                marginRight: ".5rem",
              }}
            />
            <Heading as="h1" color="blackAlpha.900">
              Report number
              <span
                style={{
                  color: "#4299E1",
                }}
              >
                #{reportNum}
              </span>
            </Heading>
          </Flex>
          <FormControl>
            <Flex direction="column" marginBottom="1rem">
              <FormLabel>
                Bug Name
                <span style={{ color: "red" }}>*</span>:
              </FormLabel>
              <Input
                type="text"
                value={name}
                placeholder="Put the name of the bug here"
                onChange={handleInputChanged}
              />
              {error.length !== 0 && (
                <span
                  style={{
                    color: "#bb2a2a",
                  }}
                >
                  Name is required.
                </span>
              )}
            </Flex>
          </FormControl>
          <FormControl>
            <Flex direction="column" marginBottom="1rem">
              <FormLabel>Bug Description:</FormLabel>
              <Textarea
                value={description}
                resize="none"
                placeholder="Put a description here"
                onChange={handleTextAreaChanged}
              />
            </Flex>
          </FormControl>
          <Flex>
            <Button
              marginRight="1rem"
              color="blue.400"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "Report"}
            </Button>
            <Button color="red.400" onClick={handleCloseModal} type="button">
              Cancel
            </Button>
          </Flex>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ReportBug;
