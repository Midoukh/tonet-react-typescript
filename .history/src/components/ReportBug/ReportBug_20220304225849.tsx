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
        <FormControl>
          <Flex>
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
          <Flex>
            <label>
              <Text>Bug Name:</Text>
              <Textarea
                value={description}
                resize="none"
                placeholder="Put a description here"
              />
            </label>
          </Flex>
        </FormControl>
      </ModalContent>
    </Modal>
  );
};

export default ReportBug;
