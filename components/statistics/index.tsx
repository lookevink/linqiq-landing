import { Button, Divider, Text } from "@nextui-org/react";
import React from "react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Statistics = () => {
  return (
    <>
      <Box
        css={{
          pt: "$20",
          pb: "$16",
          px: "$6",
        }}
      >
        <Flex direction={"column"} align={"center"}>
          <Text
            h3
            css={{
              textAlign: "center",
            }}
          >
            Save time and Impress
          </Text>
          <Text
            span
            css={{
              maxWidth: "800px",
              textAlign: "center",
            }}
          >
            LP engagemnt is not just distracting, it&apos;s expensive.
          </Text>
        </Flex>
        <Flex
          direction={"row"}
          wrap={"wrap"}
          justify={"center"}
          css={{
            gap: "4rem",
            pt: "$16",
            "@sm": {
              gap: "10rem",
            },
          }}
        >
          <Flex direction={"column"}>
            <Text h2 css={{ textAlign: "center", color: "$primary" }}>
              $54K+
            </Text>
            <Text span css={{ textAlign: "center" }} weight={"medium"}>
              direct annual cost of engagement
            </Text>
          </Flex>
          <Flex direction={"column"}>
            <Text h2 css={{ textAlign: "center", color: "$primary" }}>
              35 hrs
            </Text>
            <Text span css={{ textAlign: "center" }} weight={"medium"}>
              per week spent on engaging LPs
            </Text>
          </Flex>{" "}
          <Flex direction={"column"}>
            <Text h2 css={{ textAlign: "center", color: "$primary" }}>
              15 hrs
            </Text>
            <Text span css={{ textAlign: "center" }} weight={"medium"}>
              per week spent on unplanned LP calls
            </Text>
          </Flex>{" "}
          <Flex direction={"column"}>
            <Text h2 css={{ textAlign: "center", color: "$primary" }}>
              Undetermined
            </Text>
            <Text span css={{ textAlign: "center" }} weight={"medium"}>
              opportunity costs of reptitve LP engagement
            </Text>
          </Flex>
        </Flex>
      </Box>

      {/* <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         /> */}
    </>
  );
};
