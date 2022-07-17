import { Grid, Text, Title, useMantineTheme } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Grid>
        <Grid.Col>
          <Title order={2}>Notícias</Title>
        </Grid.Col>
      </Grid>
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
