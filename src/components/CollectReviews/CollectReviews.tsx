import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import Emoji from "./Emoji/Emoji";
import { REACTIONS } from "../../utils/constants";
import { toggleReviewVis } from "../../store/actionCreators";
import { v4 as uuid } from "uuid";
import { expressApi } from "../../lib/axios";

interface Props {
  isOpen: boolean;
}
const CollectReviews: FC<Props> = ({ isOpen }) => {
  const dispatch = useDispatch();
  const { ipAdress } = useSelector((state: StoreState) => state);
  const [activeReaction, setActiveReaction] = useState("");
  const [loading, setLoading] = useState(false);
  const notifySuccess = (message: string) => toast.success(message);
  const notifyError = (message: string) => toast.error(message);
  const handleCloseModal = () => {
    dispatch(toggleReviewVis(false));
  };
  const handleSubmitReaction = async (): Promise<any> => {
    if (!activeReaction.length) {
      notifyError("Select an emoji first!");
      return;
    }
    const data = {
      reaction: activeReaction,
      ipAdress,
    };
    setLoading(true);
    try {
      const response = await expressApi.post("/feedback/create-reviews", data);
      const { message } = response.data;
      setLoading(false);
      notifySuccess(message);
    } catch (error) {
      console.log(error);
      setLoading(false);
      notifyError("Something went wrong, please try again");
    }
  };
  const checkIfUserReactedBefore = async (signal?: any): Promise<any> => {
    try {
      const response = await expressApi.post(
        "/feedback/check-user-review",
        { ipAdress },
        signal
      );
      const {
        rec: { reaction },
      } = response.data;

      if (reaction) {
        setActiveReaction(reaction);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const { signal, abort } = new AbortController();
    checkIfUserReactedBefore(signal);
    return () => abort();
  }, []);
  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <ModalOverlay />
      <ModalContent p="2rem" minW="50vw" minH="15vh">
        <Heading as="h2" mb="2rem">
          How was your experience?
        </Heading>
        <Flex w="100%" h="100%" justify="center" align="center">
          <Flex>
            {REACTIONS.map((reaction: string) => (
              <Emoji
                key={uuid()}
                reaction={reaction}
                isSelected={activeReaction === reaction}
                setActiveReaction={setActiveReaction}
              />
            ))}
          </Flex>
        </Flex>
        <Flex align="center" mt="4rem">
          <Button
            colorScheme="blue"
            mr=".5rem"
            onClick={handleSubmitReaction}
            disabled={loading}
          >
            {loading ? "Submiting..." : "Submit"}
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
