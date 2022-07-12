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

import BusTitle from "./elements/home/BusTitle";
import { SideNav } from "./elements/home/SideNav";
import LiveMap from "./elements/Rotas/LiveMap";
// import { BusSelect } from "./elements/home/BusSelect";

function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
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
      // footer={
      //   <Footer height={60} p="md">
      //     Desenvolvido por Reinaldo Miranda de Assis
      //   </Footer>
      // }
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

            {/* <Text>Application header</Text> */}
            <BusTitle />
          </div>
        </Header>
      }
    >
      {/* <Text>Resize app to see responsive navbar in action</Text> */}
      <LiveMap />
    </AppShell>
  );
}

function App() {
  return AppShellDemo();
}

export default App;
