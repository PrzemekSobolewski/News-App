import { FilterData } from "../context/newsContext/news-context.types";

export const availableCountires: FilterData[] = [
  {
    label: "Polska",
    value: "pl",
  },
  {
    label: "Niemcy",
    value: "de",
  },
  {
    label: "Czechy",
    value: "cz",
  },
];

export const availablePageSizes: FilterData[] = [
  {
    label: "10",
    value: "10",
  },
  {
    label: "20",
    value: "20",
  },
  {
    label: "50",
    value: "50",
  },
  {
    label: "100",
    value: "100",
  },
];
