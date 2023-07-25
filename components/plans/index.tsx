import { Button, Card, Divider, Grid, Link, Text } from "@nextui-org/react";
import React, { forwardRef } from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { inputFocus } from "../../pages/api/input";

export const Plans = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <div id="pricing"></div>
      <Flex
        css={{ py: "$20", gap: "1rem", px: "$6" }}
        justify={"center"}
        wrap={"wrap"}
        direction={"column"}
        align={"center"}
      >
        <Flex direction={"column"} align={"center"}>
          <Text span css={{ color: "$blue600" }}>
            Awesome Feature
          </Text>
          <Text h2>Flexible Plans</Text>
        </Flex>

        <Flex
          css={{ gap: "2rem", width: "100%" }}
          wrap={"wrap"}
          justify={"center"}
        >
          <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Early Bird - Emerging Funds
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>
                    Feature-loaded product at a competitive price for first 10
                    GP&apos;s inaugural and subsequent funds.
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
              <Text css={{ display: "contents" }} h2>
                $400{" "}
              </Text>
              <Text css={{ display: "contents", color: "$accents8" }}>/mo</Text>
              <Button onPress={inputFocus} css={{ mt: "$7", mb: "$12" }}>
                9 Spots Available
              </Button>

              <Divider />
              <Box as={"ul"}>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    No onboarding fee
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Unlimted properties
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Unlimted LPs
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    2 year price lock & updates
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Feature requests & dedicated support
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Early Bird - Established Funds
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>
                    Set your fund apart from competiton, impress LPs, and trim
                    costs.
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
              <Text css={{ display: "contents" }} h2>
                $750{" "}
              </Text>
              <Text css={{ display: "contents", color: "$accents8" }}>/mo</Text>
              <Button onPress={inputFocus} css={{ mt: "$7", mb: "$12" }}>
                Join the Waitlist
              </Button>

              <Divider />
              <Box as={"ul"}>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Unlimited prospects
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    100-250 LPs
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    10-50 properties
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    1 year price lock
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Email Support
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Early Bird - Custom
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>
                    Let us customize every component to your exact
                    specification.
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
              <Text css={{ display: "contents" }} h2>
                Call Us
              </Text>
              <Button onPress={inputFocus} css={{ mt: "$7", mb: "$12" }}>
                Schedule a Call
              </Button>

              <Divider />
              <Box as={"ul"}>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Unlimed properties & LPs
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Custom dashboards & business logic
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Self-hosting & white labeling
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Flexibel terms & pricing
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    White glove support
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
        </Flex>
      </Flex>

      {/* <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         /> */}
    </div>
  );
});
Plans.displayName = "Plans";
