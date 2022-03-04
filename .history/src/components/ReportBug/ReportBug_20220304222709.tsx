import React, { FC } from "react";
import {
  Modal,
  ModalOverlay,
  FormControl,
  useDisclosure,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
}

const ReportBug: FC<Props> = ({ isOpen }) => {
  const { onClose } = useDisclosure();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <FormControl></FormControl>
    </Modal>
  );
};

export default ReportBug;
