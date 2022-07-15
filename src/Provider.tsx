import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

interface Props {
  children: React.ReactNode;
}

const Context = React.createContext({ currentTarget: 0, setCurrentTarget: (target: number) => {} });

const Provider: React.FC<Props> = ({ children }) => {
  const [currentTarget, setCurrentTarget] = React.useState<number>(0);

  return (
    <Context.Provider value={{ currentTarget, setCurrentTarget }}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </Context.Provider>
  );
};

export { Context };

export default Provider;
