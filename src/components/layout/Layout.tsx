import React from "react";
import { Flex, VStack } from "@chakra-ui/react";

import Navbar from "../navbar/Navbar";

interface LayoutProps {
  /* Optional head props for using in different pages */
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <VStack role="main" spacing={0}>
        {/* SEO Head */}

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <Flex flexDir="column" width="full">
          {children}

          {/* Footer */}
        </Flex>
      </VStack>
    </>
  );
};

export default Layout;
