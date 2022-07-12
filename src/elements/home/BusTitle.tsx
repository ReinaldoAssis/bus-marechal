import { Text } from "@mantine/core";

export default function BusTitle() {
  return (
    <Text
      component="span"
      align="center"
      variant="gradient"
      gradient={{ from: "indigo", to: "cyan", deg: 45 }}
      size="xl"
      weight={700}
      style={{ fontFamily: "Greycliff CF, sans-serif" }}
    >
      Marechal Bus
    </Text>
  );
}
