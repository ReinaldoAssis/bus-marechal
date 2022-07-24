import {
  AspectRatio,
  Center,
  Grid,
  List,
  MediaQuery,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import BusCard, { BusCardIcon } from "./BusCard";
import LiveMap from "./LiveMap";
import { cards } from "./Data";

export interface BusInfo {
  title: string;
  hours: string[];
  showIcon: BusCardIcon;
  Style?: React.CSSProperties;
  number?: string;
  id?: number;
}
export default function Rotas() {
  const [WIDTH, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  //gera as cards baseado na info
  const PureCards = () => {
    return cards.map((x) => {
      return (
        <BusCard
          title={x.title}
          hours={x.hours}
          showIcon={x.showIcon}
          number={x.number}
          Style={x.Style}
          id={x.id}
        />
      );
    });
  };

  const StackedCards = () => {
    return <Stack>{PureCards()}</Stack>;
  };

  const RowCards = () => {
    return <div style={{ display: "flex" }}>{PureCards()}</div>;
  };

  const GridCards = () => {
    return (
      <Grid>
        {cards.map((x) => {
          return (
            <Grid.Col span={6}>
              <BusCard
                title={x.title}
                hours={x.hours}
                showIcon={x.showIcon}
                number={x.number}
                Style={x.Style}
                screenW={WIDTH}
                id={x.id}
              />
            </Grid.Col>
          );
        })}
      </Grid>
    );
  };

  return (
    <>
      {WIDTH > 1700 ? (
        <RowCards />
      ) : WIDTH < 900 ? (
        <StackedCards />
      ) : (
        <GridCards />
      )}

      <LiveMap Style={{ height: "80%", width: "100%", marginTop: 20 }} />
    </>
  );
}
