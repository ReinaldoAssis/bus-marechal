import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import BusTitle from "./elements/home/BusTitle";
import { SideNav } from "./elements/home/SideNav";
import Rotas from "./elements/Rotas/Rotas";
import LiveMap from "./elements/Rotas/LiveMap";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Home() {
  return (
    <>
      <label>hey there</label>
      {/* <LiveMap height={400} width={600} /> */}
    </>
  );
}

function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <Router>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
          >
            {/* <Text>Application navbar</Text> */}
            <SideNav />
          </Navbar>
        }
        header={
          <Header height={70} p="md">
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <BusTitle />
            </div>
          </Header>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rotas" element={<Rotas />} />
        </Routes>
      </AppShell>
    </Router>
  );
}

export default App;
