import React from "react";
// import Link from "next/link";
import { Button, Text, Link } from "@chakra-ui/react";

export interface NavbarButtonProps {
  /** Href to navigate when interected. Required */
  href: string;
  /** Visual text to display. Required */
  label: string;
  isActivePage: boolean;
}

const NavbarButton: React.FC<NavbarButtonProps> = (props) => {
  const { href, label, isActivePage } = props;

  return (
    <Link href={href} _hover={{}} _focusVisible={{}}>
      <Button variant="navbar" borderBottom={isActivePage ? "3px solid white" : ""}>
        <Text as="span">{label}</Text>
      </Button>
    </Link>
  );
};

export default NavbarButton;
