import React from "react";
import { Stack, Text, Icon } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const NavbarNetworks: React.FC = () => {
  return (
    <Stack
      display={{ base: "none", md: "flex" }}
      w="160px"
      maxW="full"
      borderRight="1px solid white"
      alignItems="center"
      justifyContent="end"
      gap={4}
      pb={4}
    >
      <Icon as={FaFacebookF} cursor="pointer" h={5} w={5} />
      <Icon as={FaInstagram} cursor="pointer" h={5} w={5} />
      <Icon as={FaTwitter} cursor="pointer" h={5} w={5} />
    </Stack>
  );
};

export default NavbarNetworks;
