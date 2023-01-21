import { NewsList } from "./components/newsList/NewsList";
import { NewsContextProvider } from "./context/newsContext/news-context";

export const App = () => {
  return (
    <NewsContextProvider>
      <NewsList />
    </NewsContextProvider>
  );
};
