import { Dispatch, ReactNode, SetStateAction } from "react";

export type ArticleSource = {
  id: string | null;
  name: string;
};

export type Article = {
  source: ArticleSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type NewsContextProps = {
  isLoading: boolean;
  country: FilterData;
  setCountry: Dispatch<SetStateAction<FilterData>>;
  pageSize: FilterData;
  setPageSize: Dispatch<SetStateAction<FilterData>>;
  fetchTopHeadlines: () => void;
  articles: Article[];
};

export type INewsContextProvider = {
  children: ReactNode;
};

export type GetTopHeadlinesResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};

export type FilterData = {
  label: string;
  value: string;
};

export enum FilterDataKeys {
  COUNTRY = "country",
  PAGE_SIZE = "pageSize",
}
