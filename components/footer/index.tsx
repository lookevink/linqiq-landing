import { Divider, Text } from "@nextui-org/react";
import React from "react";
import { LinqiQLogo as LinqiQLogo } from "../navbar/logo";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Footer = () => {
  return (
    <Flex
      css={{
        py: "$20",
        px: "$6",
      }}
    >
      <Box as={"footer"} css={{ width: "100%" }}>
        <Flex
          justify={"center"}
          wrap={"wrap"}
          align={"center"}
          css={{
            gap: "$10",
            "&  ul": {
              margin: 0,
            },
            "@sm": {},
          }}
        >
          {/* <Flex
            css={{ gap: "$5", w: "250px" }}
            direction={"column"}
            align={"center"}
          >
            <LinqiQLogo />
            <Box as={"ul"} css={{ gap: "$5", listStyle: "none" }}>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  First Link
                </Text>
              </Box>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  Second Link
                </Text>
              </Box>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  Third Link
                </Text>
              </Box>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  Forth Link
                </Text>
              </Box>
            </Box>
          </Flex> */}
          {/* <Flex
            css={{ gap: "$5", w: "250px" }}
            direction={"column"}
            align={"center"}
          >
            <Text h5>Resources</Text>
            <Box as={"ul"} css={{ gap: "$5", listStyle: "none" }}>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  First Link
                </Text>
              </Box>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  Second Link
                </Text>
              </Box>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  Third Link
                </Text>
              </Box>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  Forth Link
                </Text>
              </Box>
            </Box>
          </Flex> */}
          {/* <Flex
            css={{ gap: "$5", w: "250px" }}
            direction={"column"}
            align={"center"}
          >
            <Text h5>Contact</Text>
            <Box as={"ul"} css={{ gap: "$5", listStyle: "none" }}>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  First Link
                </Text>
              </Box>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  Second Link
                </Text>
              </Box>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  Third Link
                </Text>
              </Box>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  Forth Link
                </Text>
              </Box>
            </Box>
          </Flex> */}
          {/* <Flex
            css={{ gap: "$5", w: "250px" }}
            direction={"column"}
            align={"center"}
          >
            <Text h5>Legal</Text>
            <Box as={"ul"} css={{ gap: "$5", listStyle: "none" }}>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  First Link
                </Text>
              </Box>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  Second Link
                </Text>
              </Box>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  Third Link
                </Text>
              </Box>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  Forth Link
                </Text>
              </Box>
            </Box>
          </Flex> */}
          {/* <Flex
            css={{ gap: "$5", w: "250px" }}
            direction={"column"}
            align={"center"}
          >
            <Text h5>Press</Text>
            <Box as={"ul"} css={{ gap: "$5", listStyle: "none" }}>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  First Link
                </Text>
              </Box>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  Second Link
                </Text>
              </Box>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  Third Link
                </Text>
              </Box>
              <Box as={"li"}>
                <Text span css={{ color: "$accents8" }}>
                  Forth Link
                </Text>
              </Box>
            </Box>
          </Flex> */}
        </Flex>
        <Box
          css={{
            px: "$10",
            "@md": {
              px: "$56",
            },
          }}
        >
          <Divider
            css={{
              mt: "$14",
              display: "flex",
              justifyContent: "center",
            }}
          />
          <Flex
            align={"center"}
            wrap={"wrap"}
            css={{
              pt: "$8",
              gap: "$10",
              justifyContent: "center",
              "@md": {
                justifyContent: "space-between",
              },
            }}
          >
            <Flex
              css={{
                gap: "$10",
              }}
              wrap={"wrap"}
            >
              <LinqiQLogo />
            </Flex>
            <Flex
              css={{
                gap: "$6",
              }}
            >
              <Text span css={{ color: "$accents8" }}>
                Terms of Service
              </Text>
              <Text span css={{ color: "$accents8" }}>
                Privacy Policy
              </Text>
            </Flex>
            <Flex
              css={{
                gap: "$6",
              }}
            >
              <Text span css={{ color: "$accents8" }}>
                © Copyright 2023 LinqiQ LLC.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
