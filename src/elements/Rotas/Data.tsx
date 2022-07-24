import { BusCardIcon, BusCardProps } from "./BusCard";
import { BusInfo } from "./Rotas";

export const cards: Array<BusInfo> = [
  {
    title: "UFAL",
    hours: ["5:50", "16:50", "22:00"],
    showIcon: BusCardIcon.ShowIcon,
    Style: { marginBottom: 15 },
    id: 24,
  },
  {
    title: "Unit",
    hours: ["5:50", "16:50", "22:00"],
    showIcon: BusCardIcon.ShowNumber,
    number: "05",
    Style: { marginBottom: 15 },
    id: 5,
  },
  {
    title: "Uncisal",
    hours: ["5:50", "16:50", "22:00"],
    showIcon: BusCardIcon.ShowNumber,
    number: "03",
    Style: { marginBottom: 15 },
    id: 3,
  },
  {
    title: "Pitagoras",
    hours: ["5:50", "16:50", "22:00"],
    showIcon: BusCardIcon.ShowNumber,
    number: "04",
    Style: { marginBottom: 15 },
    id: 4,
  },
];

export const routes: Array<BusCardProps> = [
  {
    title: "UFAL",
    hours: ["5:50", "16:50", "22:00"],
    showIcon: BusCardIcon.ShowIcon,
    telegram_link: "",
    id: 24,
  },
  {
    title: "Unit",
    hours: ["5:50", "16:50", "22:00"],
    showIcon: BusCardIcon.ShowNumber,
    number: "05",
    telegram_link: "",
    id: 5,
  },
  {
    title: "Uncisal",
    hours: ["5:50", "16:50", "22:00"],
    showIcon: BusCardIcon.ShowNumber,
    number: "03",
    telegram_link: "",
    id: 3,
  },
  {
    title: "Pitagoras",
    hours: ["5:50", "16:50", "22:00"],
    showIcon: BusCardIcon.ShowNumber,
    number: "04",
    telegram_link: "",
    id: 4,
  },
];
