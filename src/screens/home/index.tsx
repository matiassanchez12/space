import { Stack, Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import NavbarNetworks from "../../components/navbar/NavbarNetworks";
import Section from "../../components/section/Section";

const Home: React.FC = (props) => {
  return (
    <Section paddingXbase={0.1} containerMaxW="full" paddingXmd={0.1} paddingY={0.1}>
      <Stack direction="row" h="full" w="full" alignItems="stretch">
        <NavbarNetworks />
        <Stack flex={1} h="full" w="full" justifyContent="space-between" margin={"0 !important"} gap={16}>
          <Stack direction="row" paddingInline={16}>
            <Stack flex={1} gap={{ base: 4, lg: 12 }} w={{ base: 260, lg: "full" }} h="full" justifyContent="start" paddingTop={28}>
              <Text fontWeight={700} fontSize={{ base: "48px", lg: "48px", xl: "72px" }} lineHeight={{ base: "52px", lg: "79px" }}>
                Adventure Together
              </Text>
              <Text
                fontWeight={500}
                width={{ base: 260, lg: "full" }}
                fontSize={{ base: "12px", md: "18px" }}
                lineHeight={{ base: "18px", md: "27px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat id potenti faucibus nec, rhoncus, vulputate vitae.
                Dictum rutrum ut cras nullam porta id dolor arcu, quis.
              </Text>
            </Stack>
            <Stack flex={{ base: 0, lg: 1 }} justifyContent="center" alignItems="start">
              <Image
                src="src/assets/images/guy.png"
                alt="guy"
                width={{ base: 211, lg: 323 }}
                height={{ base: 158, lg: 242 }}
                position={{ base: "absolute", lg: "relative" }}
                left={{ base: 48, lg: -28 }}
                top={{ base: -5, lg: -24 }}
                zIndex={-1}
              />
            </Stack>
            <Stack
              position="absolute"
              w={{ base: 819, md: 1250 }}
              h={{ base: 588, md: 898 }}
              background="url('src/assets/images/cubes.png') no-repeat"
              backgroundPosition={{ base: "bottom 0px right -86px", md: "bottom 180px left 220px" }}
              zIndex={-2}
            ></Stack>
          </Stack>
          <Stack
            direction="row"
            width="full"
            height={{ base: 187, lg: 255 }}
            paddingInline={{ base: 6, lg: 20 }}
            gap={4}
            justifyContent="space-between"
            alignItems="center"
            background="radial-gradient(100% 2631.09% at 0% 0%, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.558) 100%)"
            backdropBlur="50px"
          >
            <Image src="src/assets/images/astronaut.png" alt="astro" height={{ base: 187, lg: 255 }} width={{ base: 238, lg: 324 }} />
            <Stack w={400}>
              <Text fontWeight={700} fontSize={{ base: "16px", lg: "24px" }}>
                Exploration
              </Text>
              <Text fontWeight={500} fontSize={{ base: "12px", lg: "16px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Stack>
            <Stack w={250} display={{ base: "none", lg: "flex" }}>
              <Text fontWeight={700} fontSize={{ base: "16px", lg: "24px" }}>
                Footprint
              </Text>
              <Text fontWeight={500} fontSize={{ base: "12px", lg: "16px" }}>
                Lorem ipsum dolor sit amet, consectetur
              </Text>
            </Stack>
          </Stack>
          <Stack height={30} display={{ base: "flex", lg: "none" }} w="full"></Stack>
        </Stack>
      </Stack>
    </Section>
  );
};

export default Home;
