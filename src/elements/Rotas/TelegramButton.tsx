import { Button } from "@mantine/core";
import { BrandTelegram } from "tabler-icons-react";

export interface TelegramButtonProp {
  short: boolean;
  telegram_link: string;
}

export default function TelegramButton({ short }: TelegramButtonProp) {
  return (
    <Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.telegram.org/"
      leftIcon={<BrandTelegram size={18} />}
      styles={(theme) => ({
        root: {
          backgroundColor: "#00acee",
          border: 0,
          height: 35,
          marginRight: 10,
          marginTop: 14,
          paddingLeft: 20,
          paddingRight: 20,

          "&:hover": {
            backgroundColor: theme.fn.darken("#00acee", 0.05),
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
    >
      {short ? "Grupo" : "Entrar no grupo"}
    </Button>
  );
}
