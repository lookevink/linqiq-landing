import {
  Button,
  Dropdown,
  Link,
  Navbar,
  Switch,
  Text,
} from "@nextui-org/react";
import React from "react";
import { ModalLogin } from "../modal";
import { icons } from "./icons";
import { LinqiQLogo as LinqiQLogo } from "./logo";
import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@nextui-org/react";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { inputFocus } from "../../pages/api/input";

type NavProps = {
  onFeature1Click: () => void;
  onFeature2Click: () => void;
  onFeature3Click: () => void;
  onSupportClick: () => void;
};
export const Nav: React.FC<NavProps> = ({
  onFeature1Click,
  onFeature2Click,
  onFeature3Click,
  onSupportClick,
}) => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const collapseItems = [
    "Features",
    "Customers",
    "Pricing",
    "Company",
    "Legal",
  ];
  return (
    <Navbar
      isBordered
      css={{
        overflow: "hidden",
        "& .nextui-navbar-container": {
          background: "$background",
          borderBottom: "none",
        },
      }}
    >
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
        <a href="#">
          <LinqiQLogo />
        </a>
        <Text b color="inherit" hideIn="xs" style={{ padding: "0rem .5rem" }}>
          LinqiQ
        </Text>
        <Navbar.Content
          hideIn="sm"
          css={{
            pl: "6rem",
          }}
        >
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                iconRight={icons.chevron}
                ripple={false}
              >
                Features
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="LinqiQ features"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  svg: {
                    color: "$secondary",
                    mr: "$4",
                  },
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
              <Dropdown.Item
                key="visualization"
                showFullDescription
                description="Create data-driven & beautiful fund and property narratives."
                icon={icons.activity}
              >
                <div onClick={onFeature1Click}>Visualization</div>
              </Dropdown.Item>
              <Dropdown.Item
                key="integration"
                showFullDescription
                description="Save time & money with integrations & auto-reconciliation."
                icon={icons.flash}
              >
                <div onClick={onFeature2Click}>Automation</div>
              </Dropdown.Item>
              <Dropdown.Item
                key="control"
                showFullDescription
                description="Stay in control of your narrative with visibility templates."
                icon={icons.scale}
              >
                <div onClick={onFeature3Click}>Granular Control</div>
              </Dropdown.Item>
              <Dropdown.Item
                key="modern_tech"
                showFullDescription
                description="Stay secure, efficient, and powerful with modern tech stack."
                icon={icons.server}
              >
                <div onClick={onFeature3Click}> Modern Tech</div>
              </Dropdown.Item>
              <Dropdown.Item
                key="supreme_support"
                showFullDescription
                description="Team of experts deeply familiar with tech & finance ready to assist you."
                icon={icons.user}
              >
                <div onClick={onSupportClick}>Support</div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Link href="#pricing">Pricing</Navbar.Link>
          <Navbar.Link href="#faq">FAQ</Navbar.Link>
        </Navbar.Content>
      </Navbar.Brand>

      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
        <Navbar.CollapseItem>
          <Link
            color="inherit"
            css={{
              minWidth: "100%",
            }}
            target="_blank"
            href="https://www.linkedin.com/company/venturerei/"
          >
            <LinkedInIcon />
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </Navbar.CollapseItem>
      </Navbar.Collapse>
      <Navbar.Content>
        <Navbar.Item hideIn={"xs"}>
          <Link
            color="inherit"
            css={{
              minWidth: "100%",
            }}
            target="_blank"
            href="https://www.linkedin.com/company/venturerei/"
          >
            <LinkedInIcon />
          </Link>
        </Navbar.Item>
        <Navbar.Item hideIn={"xs"}>
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};
