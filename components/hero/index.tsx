import {
  Button,
  Checkbox,
  Divider,
  Input,
  Modal,
  Popover,
  Row,
  Text,
  Tooltip,
} from "@nextui-org/react";
import React, { useRef } from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { getEmailfromInput, signup } from "../../pages/api/signup";

export const Hero = () => {
  const [email, setEmail] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const handleSubmit = async () => {
    const email = getEmailfromInput();
    await signup(email);
    //clear input
    setEmail("");
    // handler();
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
            <Popover>
              <Popover.Trigger>
                <Button onPress={handleSubmit}>Join the Waitlist</Button>
              </Popover.Trigger>
              <Popover.Content>
                <Text css={{ p: "$10" }}>
                  Your response has been recorded. We will reach out to you
                  soon.
                </Text>
              </Popover.Content>
            </Popover>
            <Modal
              closeButton
              blur
              aria-labelledby="modal-title"
              open={visible}
              onClose={closeHandler}
            >
              <Modal.Header>
                <Text id="modal-title" size={18}>
                  Welcome to{" "}
                  <Text b size={18}>
                    LinqiQ.
                  </Text>
                  <Text>
                    We&apos;ve recorded your request. Meanwhile, please tell us
                    a little more about how we can help you.
                  </Text>
                </Text>
              </Modal.Header>
              <Modal.Body>
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Message"
                />
                <Checkbox>
                  <Text size={14}>LP Dashboard</Text>
                </Checkbox>
                <Checkbox>
                  <Text size={14}>Reporting</Text>
                </Checkbox>
                <Checkbox>
                  <Text size={14}>Fundraising</Text>
                </Checkbox>
                <Checkbox>
                  <Text size={14}>Visualization</Text>
                </Checkbox>
              </Modal.Body>
              <Modal.Footer>
                <Button auto onClick={closeHandler}>
                  Submit
                </Button>
              </Modal.Footer>
            </Modal>
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
