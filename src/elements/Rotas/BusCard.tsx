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
import { Link } from "react-router-dom";
import { BrandTelegram, Bus } from "tabler-icons-react";
import TelegramButton from "./TelegramButton";

export enum BusCardIcon {
  ShowIcon,
  ShowNumber,
}

export type BusCardProps = {
  title?: string;
  hours?: string[];
  telegram_link?: string;
  number?: string;
  showIcon: BusCardIcon;
  Style?: React.CSSProperties;
  screenW?: number; //makes the card smaller
  id?: number; //usado no ViewRoute component
};

export default function BusCard({
  title,
  hours,
  telegram_link,
  number,
  showIcon,
  Style,
  screenW,
  id,
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
            style={{
              display: (screenW ?? 1700) < 939 ? "none" : "inline",
            }}
          >
            {hours?.map((x) => {
              return (
                <Badge
                  color="green"
                  variant="light"
                  style={{ marginLeft: (screenW ?? 1700) < 985 ? 1 : 8 }}
                >
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
            <TelegramButton
              short={(screenW ?? 1701) <= 1700}
              telegram_link={telegram_link ?? "www.telegram.org"}
            />
            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
              component={Link}
              to={`/bus/${id}`}
            >
              Ver informa????es
            </Button>
          </div>
        </Group>
      </Card>
    </Container>
  );
}
