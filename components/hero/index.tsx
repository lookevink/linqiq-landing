import { Button, Divider, Input, Text } from "@nextui-org/react";
import React, { useRef } from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { getEmailfromInput, signup } from "../../pages/api/signup";

export const Hero = () => {
  const [email, setEmail] = React.useState("");
  const handleSubmit = async () => {
    const email = getEmailfromInput();
    await signup(email);
  };
  return (
    <>
      <Flex
        css={{
          gap: "$3",
          px: "$6",
          width: "100%",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          verticalAlign: "middle",
          alignItems: "center",
          "@sm": {
            flexDirection: "row",
            mt: "$20",
          },
        }}
        justify={"center"}
      >
        <Box
          css={{
            pt: "$13",
            display: "flex",
            flexDirection: "column",
            gap: "$5",
          }}
        >
          <Box
            css={{
              maxWidth: "600px",
            }}
          >
            <Text
              h1
              css={{
                display: "inline",
              }}
            >
              Modern LP engagement{" "}
            </Text>
            <Text
              h1
              css={{
                display: "inline",
              }}
            >
              for{" "}
            </Text>
            <Text
              h1
              css={{
                display: "inline",
              }}
              color="primary"
            >
              RE Fund GPs
            </Text>
          </Box>
          <Text
            css={{
              color: "$accents8",
              maxWidth: "400px",
            }}
            size={"$lg"}
            span
          >
            Data driven narrative through a real-time, intuitive, and stunning
            LP dashboard. Make your LPs happy without missing out on deals.
          </Text>

          <Flex
            css={{
              gap: "$8",
              pt: "$4",
            }}
            wrap={"wrap"}
          >
            <Input
              id="emailInput"
              type="email"
              value={email}
              placeholder="email address"
              size="lg"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button onPress={handleSubmit}>Join the Waitlist</Button>
          </Flex>
          <Flex
            wrap={"wrap"}
            css={{
              gap: "$8",
              py: "$7",
              "@sm": {
                py: "$4",
              },
            }}
          >
            <Flex
              css={{
                color: "$accents7",
                alignItems: "center",
              }}
            >
              <CheckIcon /> Risk free trial.
            </Flex>
            <Flex
              css={{
                color: "$accents7",
                alignItems: "center",
              }}
            >
              <CheckIcon /> Free updates.
            </Flex>
            <Flex
              css={{
                color: "$accents7",
                alignItems: "center",
              }}
            >
              <CheckIcon /> Price lock gauranteed.
            </Flex>
          </Flex>
        </Box>
        <Box
          css={{
            "& img": {
              width: "775px",
              objectFit: "contain",
            },
          }}
        >
          <img src="mock.png" />
        </Box>
      </Flex>
      {/* </div> */}
    </>
  );
};
