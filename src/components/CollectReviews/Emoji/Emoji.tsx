import React, { FC } from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import { Text } from "@chakra-ui/react";
import { selectAnimationData } from "../lotties";

interface Props {
  reaction: string;
  isSelected: boolean;
  setActiveReaction(reaction: string): void;
}

// Constants for emoji's scale during different states
const NORMAL_SCALE = 1;
const HOVERED_SCALE = 1.3;
const SELECTED_SCALE = 1.5;

const Emoji: FC<Props> = ({ reaction, isSelected, setActiveReaction }) => {
  const animationOptions = {
    loop: true,
    autoplay: false,
    animationData: selectAnimationData(reaction),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // Update state on the click of reaction
  const handleClick = () => {
    if (isSelected) {
      setActiveReaction("");
    } else {
      setActiveReaction(reaction);
    }
  };
  return (
    <motion.div
      style={{
        cursor: "pointer",
        margin: "0 12px",
        position: "relative",
      }}
      whileHover={{
        scale: isSelected ? SELECTED_SCALE : HOVERED_SCALE,
      }}
      animate={{
        scale: isSelected ? SELECTED_SCALE : NORMAL_SCALE,
      }}
      onClick={handleClick}
    >
      <Lottie
        options={animationOptions}
        height={100}
        width="80%"
        isStopped={!isSelected}
        isClickToPauseDisabled
      />
      {isSelected && (
        <Text
          as="p"
          position="absolute"
          bottom="-32px"
          left="50%"
          transform="translate(-50%, -50%)"
          font-size="16px"
          user-select="none"
        >
          {reaction}
        </Text>
      )}
    </motion.div>
  );
};
export default Emoji;
