import { Button, Divider, Navbar, Text } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { Flex } from "../styles/flex";
import { inputFocus } from "../../pages/api/input";

export const Trial = () => {
  return (
    <>
      <Flex
        css={{
          py: "$20",
          px: "$6",
        }}
        justify={"center"}
        direction={"column"}
        align={"center"}
      >
        <Text h3>Join the waitlist</Text>
        <Text
          span
          css={{
            color: "$accents8",
            pb: "$15",
            textAlign: "center",
          }}
        >
          and be a part of early users who have access to perks like feature
          requests, price lock, and more
        </Text>
        <Button onPress={inputFocus}>Join the waitlist</Button>
      </Flex>
    </>
  );
};
