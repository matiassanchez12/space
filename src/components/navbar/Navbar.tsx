import React from "react";
import {
  Box,
  Container,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Link,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { BsSun } from "react-icons/bs";

import NavbarLink, { NavbarLinkProps } from "./NavbarLink";
import NavbarButton from "./NavbarButton";
import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";

const NAVBAR_LINKS: NavbarLinkProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/gallery",
    label: "Gallery",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const Navbar: React.FC = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpen, setIsOpen] = React.useState(false);
  const currentPage = "/";

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Box as="nav" height={20} top={0} width="full" zIndex={"modal"}>
      <Container height="full" maxW="full" paddingInline={0}>
        <Flex alignItems="center" height="full" justifyContent="space-between" paddingRight={{ base: 10, lg: 0 }}>
          <Stack h="full" w="160px" alignItems="center" justifyContent="center" borderRight={{ base: "", md: "1px solid white" }}>
            <Link href="/" _hover={{}}>
              <Text as="span" cursor="pointer" color="primary.500" fontSize="48px" fontWeight={700}>
                Xae
              </Text>
            </Link>
          </Stack>
          <Stack
            direction="row"
            display={{ base: "none", lg: "flex" }}
            alignItems="center"
            fontSize="lg"
            fontWeight={700}
            spacing={12}
            paddingInline={8}
          >
            {NAVBAR_LINKS.map((link, index) => {
              return <NavbarButton key={index} href={link.href} label={link.label} isActivePage={link.href === currentPage} />;
            })}
            <Icon _hover={{ cursor: "pointer" }} color="white" as={BsSun} h={6} right={4} w={6} />
          </Stack>
          <Icon _hover={{ cursor: "pointer" }} as={FaBars} display={{ base: "flex", lg: "none" }} h={6} w={6} onClick={toggleDrawer} />
        </Flex>
        <Drawer open={isOpen} onClose={toggleDrawer} direction="top" style={{ backgroundColor: "#2d3748", height: "55%" }}>
          <VStack paddingY={6}>
            <Icon _hover={{ cursor: "pointer" }} as={FaWindowClose} h={6} position="absolute" right={4} w={6} onClick={toggleDrawer} />
            <Stack align="center" pt={4} spacing={10}>
              {NAVBAR_LINKS.map((link, index) => (
                <NavbarLink key={index} href={link.href} label={link.label} />
              ))}
              <Icon _hover={{ cursor: "pointer" }} color="white" as={BsSun} h={6} right={4} w={6} />
            </Stack>
          </VStack>
        </Drawer>
      </Container>
    </Box>
  );
};

export default Navbar;
