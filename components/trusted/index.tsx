import { Button, Divider, Grid, Text } from "@nextui-org/react";
import React from "react";
import REIlogo, { LinqiQLogo as LinqiQLogo } from "../navbar/logo";
import { Flex } from "../styles/flex";

export const Trusted = () => {
  return (
    <>
      <Flex
        direction={"column"}
        align={"center"}
        css={{
          pt: "$20",
          px: "$6",
          "@md": {
            px: "$64",
          },
        }}
      >
        <Text h2 css={{ textAlign: "center" }}>
          Built by GPs, for GPs
        </Text>
        <Text
          css={{
            color: "$accents8",
            maxWidth: "800px",
            textAlign: "center",
          }}
          weight="normal"
          size={"$lg"}
        >
          We understand the amount of time and work it takes to keep your LPs
          apprised and happy. We especially want to unburden emerging fund
          managers of complicated LP engagment without the burdensome price tags
          of our competitors. Let us help you so you can focus on closing deals.
        </Text>
        <REIlogo />
        <Text weight={"semibold"} span size={"$sm"}>
          A Venture REI Company
        </Text>
      </Flex>
    </>
  );
};
