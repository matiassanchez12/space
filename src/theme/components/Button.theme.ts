import { ComponentStyleConfig } from "@chakra-ui/react";

const ButtonTheme: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "none",
    fontWeight: 700,
  },
  variants: {
    navbar: {
      bg: "transparent",
      padding: "0",
      color: "white",
      fontSize: "lg",
      transition: "all .4s ease-in-out",
      borderBottom: "3px solid transparent",
    },
    solid: {
      bg: "primary.500",
      color: "white",
      _hover: {
        bg: "primary.600",
      },
    },
  },
};

export default ButtonTheme;
