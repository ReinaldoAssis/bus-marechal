import { Badge, Button, Group, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BusCardIcon, BusCardProps } from "../BusCard";

import { routes } from "../Data";
import LiveMap from "../LiveMap";
import TelegramButton from "../TelegramButton";

//TODO: convert this component to class type and call fetch only when componentDidMount
export default function ViewRoute() {
  const { id_arg } = useParams();

  interface IGps {
    lat: any;
    long: any;
  }

  const [gps, setGps] = useState<IGps>();
  const [show, setShow] = useState(false);

  const data: BusCardProps = routes.find((x) => x.id == id_arg) ?? {
    showIcon: BusCardIcon.ShowIcon,
    id: 505,
    title: "Undefined - Error",
  };

  useEffect(() => {
    //console.log(`${process.env.REACT_APP_API_KEY}`);
    const getData = async () => {
      var myHeaders = new Headers();
      myHeaders.append("X-API-Key", `${process.env.REACT_APP_API_KEY}`);

      var requestOptions: RequestInit = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      //console.log(`Api key ${process.env.REACT_APP_API_KEY}`);
      // fetch("https://77hkg3.deta.dev/bus/24", requestOptions)
      //   .then((response) => response.json())
      //   .then((result) => setGps(result))
      //   .catch((error) => console.log("error", error));

      await fetch("https://77hkg3.deta.dev/bus/24", requestOptions)
        .then((response) => response.json())
        .then((result) => setGps({ lat: result.lat, long: result.long }));

      //console.log(gps);
    };
    getData();
  }, []);

  useEffect(() => {
    //console.log(`show log: ${gps?.lat}`);
    setShow(gps?.lat != undefined);
  }, [gps]);

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

      {show == true ? (
        <LiveMap
          Style={{ height: "80%", width: "100%", marginTop: 20 }}
          marker={{ lat: gps?.lat, long: gps?.long }}
          center={[
            gps?.lat == undefined ? -9.7229 : gps?.lat,
            gps?.long == undefined ? -35.8683 : gps?.long,
          ]}
        />
      ) : (
        <Text style={{ marginTop: 20 }}>Carregando...</Text>
      )}

      {/* <Button
        onClick={() => {
          console.log(gps);
        }}
      >
        Atualizar
      </Button> */}
    </>
  );
}
