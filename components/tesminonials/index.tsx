import { Button, Card, Divider, Text } from "@nextui-org/react";
import React from "react";
import { QuotesIcon } from "../icons/QuotesIcon";
import { Flex } from "../styles/flex";
import { inputFocus } from "../../pages/api/input";

export const Testimonials = () => {
  return (
    <>
      <Flex
        direction={"column"}
        css={{
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          px: "$6",
          py: "$20",
          flexDirection: "column-reverse",
          "@sm": {
            justifyContent: "space-around",
            px: "$32",
            flexDirection: "row-reverse",
          },
          "@md": {
            px: "$64",
          },
        }}
      >
        <Flex direction="column" css={{ gap: "1.5rem" }}>
          <Card>
            <Card.Body>
              <Flex
                css={{
                  py: "$10",
                  gap: "$5",
                }}
              >
                <QuotesIcon />
                <Flex direction={"column"} css={{ gap: "0.5rem" }}>
                  <Text
                    span
                    css={{
                      maxWidth: "400px",
                      color: "$accents8",
                    }}
                  >
                    Super excited to access this dashboard. I already feel like
                    calling my GP a lot less looking at these charts.
                  </Text>
                  <Text
                    span
                    weight={"bold"}
                    css={{
                      maxWidth: "400px",
                      display: "contents",
                      color: "$accents9",
                    }}
                  >
                    Bin Wu{" "}
                  </Text>
                  <Text
                    span
                    css={{
                      display: "contents",
                      color: "$accents8",
                    }}
                  >
                    - Trustee & LP
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Flex
                css={{
                  py: "$10",
                  gap: "$5",
                }}
              >
                <QuotesIcon />
                <Flex direction={"column"} css={{ gap: "0.5rem" }}>
                  <Text
                    span
                    css={{
                      maxWidth: "400px",
                      color: "$accents8",
                    }}
                  >
                    This will certainly help us manage our portfolios across
                    asset classes. We could&apos;ve used this level of
                    transparency & responsiveness a long time ago
                  </Text>
                  <Text
                    span
                    weight={"bold"}
                    css={{
                      maxWidth: "400px",
                      display: "contents",
                      color: "$accents9",
                    }}
                  >
                    John Bivins{" "}
                  </Text>
                  <Text
                    span
                    css={{
                      display: "contents",
                      color: "$accents8",
                    }}
                  >
                    - SFO
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Flex
                css={{
                  py: "$10",
                  gap: "$5",
                }}
              >
                <QuotesIcon />
                <Flex direction={"column"} css={{ gap: "0.5rem" }}>
                  <Text
                    span
                    css={{
                      maxWidth: "400px",
                      color: "$accents8",
                    }}
                  >
                    It will save us from chasing down our GPs for updates when
                    marketing conditions change unexpectedly.
                  </Text>
                  <Text
                    span
                    weight={"bold"}
                    css={{
                      maxWidth: "400px",
                      display: "contents",
                      color: "$accents9",
                    }}
                  >
                    Dr. Steve Lu{" "}
                  </Text>
                  <Text
                    span
                    css={{
                      display: "contents",
                      color: "$accents8",
                    }}
                  >
                    - Director & Chairman
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>
        <Flex
          align={"start"}
          direction={"column"}
          css={{
            alignItems: "center",
            "@sm": {
              alignItems: "start",
            },
          }}
        >
          <Text span css={{ color: "$primary" }}>
            Happy LPs
          </Text>
          <Text h3>Hear how excited LPs are</Text>
          <Text span css={{ color: "$accents8", maxW: "600px", pb: "$8" }}>
            After seeing our demo and early prototype, LPs are ready to enjoy
            the insight and transparency that our platform provides.
          </Text>
          <Button onPress={inputFocus}>Join the Waitlist</Button>
        </Flex>
      </Flex>

      {/* <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         /> */}
    </>
  );
};
