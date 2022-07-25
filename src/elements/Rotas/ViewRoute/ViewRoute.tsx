import { Badge, Group, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import { BusCardIcon, BusCardProps } from "../BusCard";

import { routes } from "../Data";
import LiveMap from "../LiveMap";

export default function ViewRoute() {
  const { id_arg } = useParams();

  const data: BusCardProps = routes.find((x) => x.id == id_arg) ?? {
    showIcon: BusCardIcon.ShowIcon,
    id: 505,
    title: "Undefined - Error",
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Title order={2} style={{ marginRight: 30 }}>
          {data.title}
        </Title>
        <Group>
          {data.hours?.map((x) => {
            return (
              <Badge color="blue" variant="light">
                {x}
              </Badge>
            );
          })}
        </Group>
      </div>
      <LiveMap Style={{ height: "80%", width: "100%", marginTop: 20 }} />
    </>
  );
}
