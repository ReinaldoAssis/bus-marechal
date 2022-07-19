import {
  Container,
  Grid,
  MediaQuery,
  SimpleGrid,
  Skeleton,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const PRIMARY_COL_HEIGHT = 300;

export default function Home() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  const [WIDTH, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return (
    <>
      <Title order={2}>Notícias</Title>
      <div className="homediv">
        <NewsCard
          Style={{ marginRight: WIDTH >= 1000 ? 25 : "auto", marginBottom: 20 }}
        />
        <NewsCard Style={{ marginBottom: 20 }} />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 10,
          display: "flex",
          verticalAlign: "center",
        }}
      >
        <a
          href="https://www.instagram.com/reinaldo.assis/"
          target="_blank"
          style={{ marginLeft: 10, textDecoration: "none", color: "#c5c6c6" }}
        >
          Desenvolvido por @reinaldo.assis
        </a>
      </div>
    </>
  );
}
