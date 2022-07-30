import { Badge, Group, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BusCardIcon, BusCardProps } from "../BusCard";

import { routes } from "../Data";
import LiveMap from "../LiveMap";
import TelegramButton from "../TelegramButton";

//TODO: convert this component to class type and call fetch only when componentDidMount
export default function ViewRoute() {
  const { id_arg } = useParams();

  const [gps, setGps] = useState();

  const data: BusCardProps = routes.find((x) => x.id == id_arg) ?? {
    showIcon: BusCardIcon.ShowIcon,
    id: 505,
    title: "Undefined - Error",
  };

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("X-API-Key", "cM19QLTD.dmFrooK15J6dacHt9Xdj3A-5SQUBwem8i");

    var requestOptions: RequestInit = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    //console.log(`Api key ${process.env.REACT_APP_API_KEY}`);
    fetch("https://77hkg3.deta.dev/bus/24", requestOptions)
      .then((response) => response.json())
      .then((result) => setGps(result))
      .catch((error) => console.log("error", error));

    console.log(gps);
  }, []);

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
      <TelegramButton
        short={false}
        telegram_link={data.telegram_link ?? "www.telegram.org"}
      />
      <LiveMap
        Style={{ height: "80%", width: "100%", marginTop: 20 }}
        marker={{ lat: 0, long: 0 }}
      />
    </>
  );
}
