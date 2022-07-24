import { Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import { BusCardProps } from "../BusCard";

export default function ViewRoute() {
  const { id_arg } = useParams();
  return <Title order={2}>{id_arg}</Title>;
}
