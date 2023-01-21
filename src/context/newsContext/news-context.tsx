import axios from "axios";
import { createContext, FC, useMemo, useState } from "react";
import { availableCountires, availablePageSizes } from "../../utils/consts";
import { getFilterFromLocalStorage } from "../../utils/helpers";
import {
  Article,
  FilterData,
  FilterDataKeys,
  GetTopHeadlinesResponse,
  INewsContextProvider,
  NewsContextProps,
} from "./news-context.types";

export const NewsContext = createContext<NewsContextProps>({
  isLoading: false,
  country: availableCountires[0],
  setCountry: () => undefined,
  pageSize: availablePageSizes[0],
  setPageSize: () => undefined,
  fetchTopHeadlines: () => undefined,
  articles: [],
});

export const NewsContextProvider: FC<INewsContextProvider> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [country, setCountry] = useState<FilterData>(
    getFilterFromLocalStorage(FilterDataKeys.COUNTRY) || availableCountires[0]
  );
  const [pageSize, setPageSize] = useState<FilterData>(
    getFilterFromLocalStorage(FilterDataKeys.PAGE_SIZE) || availablePageSizes[0]
  );
  const [isLoading, setIsLoading] = useState(false);

  const fetchTopHeadlines = async () => {
    setIsLoading(true);

    try {
      const topHeadlinesResponse = await axios.get<GetTopHeadlinesResponse>(
        `https://newsapi.org/v2/top-headlines?country=${country.value}&pageSize=${pageSize}&apiKey=${process.env.API_KEY}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      if (topHeadlinesResponse.status === 200) {
        const { articles } = topHeadlinesResponse.data;
        setArticles(articles);
      }
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };

  const newsContextValue = useMemo(
    () => ({
      isLoading,
      articles,
      country,
      setCountry,
      pageSize,
      setPageSize,
      fetchTopHeadlines,
    }),
    [
      isLoading,
      articles,
      country,
      setCountry,
      pageSize,
      setPageSize,
      fetchTopHeadlines,
    ]
  );

  return (
    <NewsContext.Provider value={newsContextValue}>
      {children}
    </NewsContext.Provider>
  );
};
