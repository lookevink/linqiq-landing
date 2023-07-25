import { Button, Divider, Text } from "@nextui-org/react";
import React from "react";
import {
  OpenInBrowser,
  EvPlugCharging,
  PriorityUp,
  Twitter,
} from "iconoir-react";
import { BoxIcon } from "../icons/BoxIcon";
import { Flex } from "../styles/flex";

export const Faq = () => {
  return (
    <>
      <div id="faq"></div>
      <Flex
        css={{
          py: "$20",
          gap: "$18",
          px: "$6",
        }}
        direction={"column"}
      >
        <Flex align={"center"} direction={"column"}>
          <Text span css={{ color: "$primary" }}>
            FAQ
          </Text>
          <Text h2>You Have Questions?</Text>
          <Text
            span
            css={{
              maxWidth: "700px",
              color: "$accents8",
              textAlign: "center",
            }}
          >
            The quickest way to have your questions answered is by contacting
            hello@linqiq.net or scheduling a call. Here are some commonly asked
            questions.
          </Text>
        </Flex>

        <Flex
          css={{
            gap: "$10",
            "@lg": {
              px: "$64",
            },
          }}
          direction={"column"}
        >
          <Flex css={{ gap: "$5" }} justify={"center"}>
            <PriorityUp />
            <Flex direction={"column"} css={{ gap: "$3" }}>
              <Text h3>Is LinqiQ for me if I&apos;m currently raising?</Text>
              <Text
                span
                css={{
                  color: "$accents8",
                }}
              >
                While we built LinqiQ for GPs with closed funds, we are testing
                a LinqRaise mode that lets you to showcase your trackrecord.
                Your prospects will be able to access the same dashboards as
                those of closed-funds.
              </Text>
            </Flex>
          </Flex>

          <Flex css={{ gap: "$5" }} justify={"center"}>
            <Twitter width={36} />
            <Flex direction={"column"} css={{ gap: "$3" }}>
              <Text h3>
                What is the early bird plan and why should I join it?
              </Text>
              <Text
                span
                css={{
                  color: "$accents8",
                }}
              >
                As an early bird, you enjoy extremely favorable pricing and
                terms. In exchange, we ask that you help us shape and test the
                product by being in our tight feedback loop. Because you
                contribute to our product decisions, you will also have the
                opportunity to request features that will empower you and other
                GPs. Spots are limited so apply to join today.
              </Text>
            </Flex>
          </Flex>

          <Flex css={{ gap: "$5" }} justify={"center"}>
            <EvPlugCharging width={36} height={36} />
            <Flex direction={"column"} css={{ gap: "$3" }}>
              <Text h3>Which integrations do you support?</Text>
              <Text
                span
                css={{
                  color: "$accents8",
                }}
              >
                We are currently building an integration with Intuit for
                accounting, and csv import function from Appfolio. If you do not
                use either of these software, don&apos;t worry. You can deliver
                beautiful narratives. We make custom CSV import, manual entry,
                and updates extremely easy, so you will still enjoy the
                cost-saving benetfits. Become an early bird, and we will
                prioritize your software providers in future releases.
              </Text>
            </Flex>
          </Flex>

          <Flex css={{ gap: "$5" }} justify={"center"}>
            <OpenInBrowser height={36} width={36} />
            <Flex direction={"column"} css={{ gap: "$3" }}>
              <Text h3>I&apos;m excited. When and how can I get started?</Text>
              <Text
                span
                css={{
                  color: "$accents8",
                }}
              >
                We will be launching the alpha soon, and will be pushing nightly
                updates thereafter. Join the waitlist, and we will keep you
                updated. When we are ready, it will as simple as providing a few
                API keys if you use the integrations, adding a DNS record, and
                importing a few CSV files. The process should take less than a
                day.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         /> */}
    </>
  );
};
