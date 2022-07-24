import React from "react";
import {
  GitPullRequest,
  AlertCircle,
  Messages,
  Database,
  Home,
  Blockquote,
  Bus,
} from "tabler-icons-react";
import { ThemeIcon, UnstyledButton, Group, Text } from "@mantine/core";
import { Link } from "react-router-dom";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  href: string;
  setOpened: Function;
}

function MainLink({ icon, color, label, href, setOpened }: MainLinkProps) {
  return (
    <UnstyledButton
      component={Link}
      to={href}
      onClick={() => setOpened(false)}
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="md">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  { icon: <Home size={22} />, color: "blue", label: "Home", href: "/" },
  { icon: <Bus size={22} />, color: "teal", label: "Rotas", href: "/rotas" },
  {
    icon: <Blockquote size={22} />,
    color: "violet",
    label: "Créditos",
    href: "/",
  },
];

interface SideNavProps {
  setOpened: Function;
}

export function SideNav({ setOpened }: SideNavProps) {
  const links = data.map((link) => (
    <MainLink setOpened={setOpened} {...link} key={link.label} />
  ));
  return <div>{links}</div>;
}
