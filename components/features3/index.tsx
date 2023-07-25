import { Card, Divider, Text } from "@nextui-org/react";
import React, { forwardRef } from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Loft3D, DatabaseMonitor, ShieldEye, Dollar } from "iconoir-react";
import { Flex } from "../styles/flex";

export const Features3 = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <Box
        css={{
          px: "$6",
          pb: "$14",
        }}
      >
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          css={{
            pt: "$20",
          }}
        >
          <Text span css={{ color: "$primary" }}>
            Modern Technology
          </Text>
          <Text h3>Trascend Legacy</Text>
          <Text
            span
            css={{
              maxWidth: "800px",
              color: "$accents8",
              textAlign: "center",
            }}
          >
            Building with the latest availble technologies, we provide superior
            features, performance, and security at a fraction of cost compared
            to current market players who use legacy systems.
          </Text>
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          wrap={"wrap"}
          css={{
            gap: "1rem",
            pt: "$14",
          }}
        >
          <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                <Dollar width={32} height={32} />
                <Flex direction={"column"}>
                  <Text h4>Cost Effective</Text>
                  <Text span>
                    Modern, frontend framework, CI/CD, & cloud native services
                    allow us to move quickly, cost effectively, and safely.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
          <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                <Loft3D width={34} height={34} />
                <Flex direction={"column"}>
                  <Text h4>Flexibility</Text>
                  <Text span>
                    Microservices enable us to quickly customize something as
                    small as UI themes to complex business logic & accounting
                    approaches.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>
        <Flex
          align={"center"}
          wrap={"wrap"}
          justify={"center"}
          css={{
            gap: "1rem",
            pt: "$8",
          }}
        >
          <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                <ShieldEye width={30} height={30} />
                <Flex direction={"column"}>
                  <Text h4>Bank-Level Security</Text>
                  <Text span>
                    Automatic security updates, MFA, and robust encryptions
                    shield you and your LP data from security vulnerabilities.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
          <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                <DatabaseMonitor height={30} width={30} />
                <Flex direction={"column"}>
                  <Text h4>Row Level Security</Text>
                  <Text span>
                    With row level security and access control built right into
                    the database layer, we&apos;re guarded from the inside out.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>
      </Box>
    </div>
  );
});
Features3.displayName = "Features3";
