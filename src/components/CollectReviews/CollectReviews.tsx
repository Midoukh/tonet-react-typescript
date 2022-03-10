import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react";
import Emoji from "./Emoji/Emoji";
import { REACTIONS } from "../../utils/constants";
import { toggleReviewVis } from "../../store/actionCreators";
interface Props {
  isOpen: boolean;
}
const CollectReviews: FC<Props> = ({ isOpen }) => {
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(toggleReviewVis(false));
  };
  const [activeReaction, setActiveReaction] = useState("");
  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <ModalOverlay />
      <ModalContent p="2rem" minW="50vw" minH="15vh">
        <Heading as="h2">How was your experience?</Heading>
        <Flex w="100%" h="100%" justify="center" align="center">
          <Flex>
            {REACTIONS.map((reaction: string) => (
              <Emoji
                reaction={reaction}
                isSelected={activeReaction === reaction}
                setActiveReaction={setActiveReaction}
              />
            ))}
          </Flex>
        </Flex>
        <Flex align="center" mt="1rem">
          <Button colorScheme="blue" mr=".5rem">
            Submit
          </Button>
          <Button
            colorScheme="red"
            variant="outline"
            onClick={handleCloseModal}
          >
            Cancel
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default CollectReviews;
