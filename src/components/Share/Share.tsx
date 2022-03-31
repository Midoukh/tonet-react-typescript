import React, { FC } from "react";
import { useDispatch } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Box,
  Flex,
  Text,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  WhatsappIcon,
} from "react-share";

import { toggleShareVis } from "../../store/actionCreators";

interface Props {
  isOpen: boolean;
}
const Share: FC<Props> = ({ isOpen }) => {
  const dispatch = useDispatch();
  const handleCloseModal = (): void => {
    dispatch(toggleShareVis(false));
  };
  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <ModalOverlay />
      <ModalContent>
        <Box minH="60vh">
          <Flex
            justify="space-between"
            align="center"
            w="100%"
            borderBottom="1px solid gray"
            p="1rem"
          >
            <Text>Share TONET</Text>
            <Button
              type="button"
              variant="solid"
              color="blue.600"
              onClick={handleCloseModal}
            >
              Cancel
            </Button>
          </Flex>
          <Flex direction="column" justify="center" align="center">
            <Box bg="blue.200" mb="3rem" mt="1rem" h="6rem" w="7rem">
              <Text>QR Code here</Text>
            </Box>
            <Grid templateColumns="repeat(5, 1fr)" gap={6} p="1rem">
              <GridItem>
                <EmailShareButton url="" children={<EmailIcon />} />
              </GridItem>
              <GridItem>
                <FacebookShareButton url="" children={<FacebookIcon />} />
              </GridItem>
              <GridItem>
                <LinkedinShareButton url="" children={<LinkedinIcon />} />
              </GridItem>
              <GridItem>
                <PinterestShareButton
                  media=""
                  url=""
                  children={<PinterestIcon />}
                />
              </GridItem>
              <GridItem>
                <RedditShareButton url="" children={<RedditIcon />} />
              </GridItem>
              <GridItem>
                <TelegramShareButton url="" children={<TelegramIcon />} />
              </GridItem>
              <GridItem>
                <TumblrShareButton url="" children={<TumblrIcon />} />
              </GridItem>
              <GridItem>
                <ViberShareButton url="" children={<ViberIcon />} />
              </GridItem>
              <GridItem>
                <WhatsappShareButton url="" children={<WhatsappIcon />} />
              </GridItem>
            </Grid>
          </Flex>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default Share;
