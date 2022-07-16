import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
  Container,
  ThemeIcon,
  Title,
  MANTINE_SIZES,
} from "@mantine/core";
import { BrandTelegram, Bus } from "tabler-icons-react";

export enum BusCardIcon {
  ShowIcon,
  ShowNumber,
}

type BusCardProps = {
  title?: string;
  hours?: string[];
  telegram_link?: string;
  number?: string;
  showIcon: BusCardIcon;
  Style?: React.CSSProperties;
  screenW?: number; //makes the card smaller
};

export default function BusCard({
  title,
  hours,
  telegram_link,
  number,
  showIcon,
  Style,
  screenW,
}: BusCardProps) {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  function IconElement() {
    if (showIcon == BusCardIcon.ShowIcon) return <Bus color="#ff2825" />;
    else if (showIcon == BusCardIcon.ShowNumber)
      return (
        <Text weight="700" size={MANTINE_SIZES[3]} color="#ff2825">
          {number}
        </Text>
      );
    return <></>;
  }

  return (
    <Container size={400} style={{ ...Style }}>
      <Card shadow="sm">
        <Card.Section>
          {/* <Image src="./image.png" height={160} alt="Norway" /> */}
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Group spacing="sm">
            <IconElement />
            <Text weight={500}>{title}</Text>
          </Group>
          <Group
            spacing={(screenW ?? 1700) < 985 ? 2 : "sm"}
            style={{
              display: (screenW ?? 1700) < 939 ? "none" : "inline",
            }}
          >
            {hours?.map((x) => {
              return (
                <Badge color="green" variant="light">
                  {x}
                </Badge>
              );
            })}
          </Group>
        </Group>

        <Text
          size="sm"
          style={{ color: secondaryColor, lineHeight: 1.5 }}
        ></Text>

        <Group>
          <div style={{ display: "flex" }}>
            <TelegramButton short={(screenW ?? 1701) <= 1700} />
            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Ver informações
            </Button>
          </div>
        </Group>
      </Card>
    </Container>
  );
}

interface TelegramButtonProp {
  short: boolean;
}

function TelegramButton({ short }: TelegramButtonProp) {
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
