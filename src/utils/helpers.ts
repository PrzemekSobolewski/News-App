import {
  FilterData,
  FilterDataKeys,
} from "../context/newsContext/news-context.types";

export const shortenString = (str: string, maxLength: number) => {
  if (str.length <= maxLength) return str + "...";
  return str.slice(0, str.lastIndexOf(" ", maxLength)) + "...";
};

export const getFilterFromLocalStorage = (name: FilterDataKeys) => {
  const filterValue = localStorage.getItem(name);
  if (filterValue) {
    return JSON.parse(filterValue) as FilterData;
  }
  return null;
};

export const setFilterToLocalStorage = (
  name: FilterDataKeys,
  value: FilterData
) => {
  localStorage.setItem(name, JSON.stringify(value));
};
