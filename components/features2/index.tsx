import { Button, Divider, Text } from "@nextui-org/react";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
import { ListSelect, EyeAlt } from "iconoir-react";
import { Flex } from "../styles/flex";

export const Features2 = () => {
  return (
    <>
      <Flex
        direction={"column"}
        css={{
          gap: "1rem",
          pt: "$20",
          justifyContent: "center",
          alignItems: "center",
          px: "$6",

          "@sm": {
            gap: "5rem",
            flexDirection: "row-reverse",
            px: "$16",
          },
          "@md": {
            justifyContent: "space-evenly",
          },
        }}
      >
        <Flex
          direction="column"
          align={"center"}
          css={{
            maxWidth: "600px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {/* <Text span css={{ color: "$blue600" }}> */}
          <Text span css={{ color: "$primary" }}>
            Visibility Control
          </Text>
          <Text h3>Your Fund, Your Narrative</Text>
          <Text
            span
            css={{
              maxWidth: "400px",
              color: "$accents8",
            }}
          >
            With our proprietary visibility templates, you always have control
            over what and how you want to share with your investors.
          </Text>

          <Flex
            justify={"center"}
            wrap={"wrap"}
            css={{
              py: "$10",
            }}
          >
            <Flex
              css={{
                py: "$10",
                gap: "$5",
              }}
            >
              <ListSelect />
              <Flex direction={"column"}>
                <Text h4 weight={"medium"}>
                  Granular Control
                </Text>
                <Text
                  span
                  css={{
                    maxWidth: "325px",
                    color: "$accents8",
                  }}
                >
                  Customzied visibility templates lets you easily control who
                  sees what and when, in what frequency.
                </Text>
              </Flex>
            </Flex>
            <Flex
              css={{
                py: "$10",
                gap: "$5",
              }}
            >
              <EyeAlt />
              <Flex direction={"column"}>
                <Text h4 weight={"medium"}>
                  Preview
                </Text>
                <Text
                  span
                  css={{
                    maxWidth: "325px",
                    color: "$accents8",
                  }}
                >
                  Preview screens shows you what your investors will see, so you
                  never have to worry about pushing the wrong narrative.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          css={{
            maxWidth: "700px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <img src="/visibility_template.png" />
        </Flex>
      </Flex>

      {/* <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         /> */}
    </>
  );
};
