import React, { FC, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  FormControl,
  useDisclosure,
  Flex,
  Input,
  Textarea,
  Text,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { toggleReportBugVis } from "../../store/actionCreators";
interface Props {
  isOpen: boolean;
}

const ReportBug: FC<Props> = ({ isOpen }) => {
  const [name, setName] = useState<string>("");
  const [description, setDescrition] = useState<string>("");

  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(toggleReportBugVis(false));
  };
  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <ModalOverlay />
      <ModalContent>
        <FormControl p="2rem">
          <Flex direction="column" marginBottom="1rem">
            <label>
              <Text>
                Bug Name:
                <span>*</span>
              </Text>
              <Input
                type="text"
                value={name}
                placeholder="Put the name of the bug here"
              />
            </label>
          </Flex>
          <Flex direction="column">
            <label>
              <Text>Bug Name:</Text>
              <Textarea
                value={description}
                resize="none"
                placeholder="Put a description here"
              />
            </label>
          </Flex>
          <Flex>
            <Button color="blue.400">Report</Button>
            <Button color="red.400" onClick={handleCloseModal}>
              Cancel
            </Button>
          </Flex>
        </FormControl>
      </ModalContent>
    </Modal>
  );
};

export default ReportBug;
