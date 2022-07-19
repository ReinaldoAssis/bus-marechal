import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

interface NewsCardProps {
  Style?: React.CSSProperties;
  classname?: string;
}

export default function NewsCard({ Style, classname }: NewsCardProps) {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div style={{ width: 340, margin: "auto", ...Style }} className={classname}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image
            src="https://blog.hotelpontaverde.com.br/wp-content/uploads/2019/08/Marechal-Deodoro-Facebook.png"
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color="blue" variant="light">
            19/07
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        {/* <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Book classic tour now
        </Button> */}
      </Card>
    </div>
  );
}
