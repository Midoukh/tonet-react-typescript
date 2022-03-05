import React, { FC, useState, ChangeEvent, FormEvent } from "react";
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
import { useDispatch } from "react-redux";
import { AiOutlineBug } from "react-icons/ai";

import { toggleReportBugVis } from "../../store/actionCreators";
import { sleep } from "../../utils/helpers/time";
interface Props {
  isOpen: boolean;
}
type InputEvent = ChangeEvent<HTMLInputElement>;
type TextAreaEvent = ChangeEvent<HTMLTextAreaElement>;
type FormTypeEvent = FormEvent<HTMLFormElement>;

const ReportBug: FC<Props> = ({ isOpen }) => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [description, setDescrition] = useState<string>("");

  //this will came from the api
  const [reportNum, setReportNum] = useState<number>(1);

  const dispatch = useDispatch();
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
  const handleSubmitForm = async (e: FormTypeEvent) => {
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
    };
  };

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
            <Button marginRight="1rem" color="blue.400" type="submit">
              Report
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
