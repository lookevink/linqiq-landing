import { Text } from "@nextui-org/react";
import React, { forwardRef } from "react";
import { IosSettings, LeaderboardStar, GridAdd } from "iconoir-react";
import { Flex } from "../styles/flex";
import { BarChart } from "../barchart";

export const Features1 = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <Flex
        direction={"column"}
        css={{
          gap: "1rem",
          pt: "$20",
          justifyContent: "center",
          alignItems: "center",
          px: "$6",
          "@sm": {
            justifyContent: "space-around",
            px: "$32",
            flexDirection: "row",
          },
          "@md": {
            px: "$64",
          },
        }}
      >
        <Flex direction="column">
          <Text span css={{ color: "$primary" }}>
            Real-time
          </Text>
          <Text h3>Push Updates as They Happen</Text>
          <Text
            span
            css={{
              maxWidth: "400px",
              color: "$accents8",
            }}
          >
            By integrating with accounting and property management software, our
            low-latency, real-time system lets you push data-driven narrative
            with high accuracy
          </Text>

          <Flex
            css={{
              py: "$10",
              gap: "$5",
            }}
          >
            <IosSettings />
            <Flex direction={"column"}>
              <Text h4 weight={"medium"}>
                Automation
              </Text>
              <Text
                span
                css={{
                  maxWidth: "400px",
                  color: "$accents8",
                }}
              >
                We integrate with accounting and property management software to
                automate repetive tasks
              </Text>
            </Flex>
          </Flex>
          <Flex
            css={{
              py: "$10",
              gap: "$5",
            }}
          >
            <LeaderboardStar />
            <Flex direction={"column"}>
              <Text h4 weight={"medium"}>
                Contexualization
              </Text>
              <Text
                span
                css={{
                  maxWidth: "400px",
                  color: "$accents8",
                }}
              >
                We pull market data of diverse asset classes and real estate
                markets to contexualize your returns.
              </Text>
            </Flex>
          </Flex>
          <Flex
            css={{
              py: "$10",
              gap: "$5",
            }}
          >
            <GridAdd />
            <Flex direction={"column"}>
              <Text h4 weight={"medium"}>
                Customization
              </Text>
              <Text
                span
                css={{
                  maxWidth: "400px",
                  color: "$accents8",
                }}
              >
                We provide a suite of graphs and widgets to help you paint the
                most accurate and stunning image of your portfolios.
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          css={{
            maxWidth: "600px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <BarChart />
        </Flex>
      </Flex>
    </div>
  );
});
Features1.displayName = "Features1";
