import { useContext, useEffect } from "react";
import { NewsContext } from "../../context/newsContext/news-context";
import { FilterDataKeys } from "../../context/newsContext/news-context.types";
import { availableCountires, availablePageSizes } from "../../utils/consts";
import { setFilterToLocalStorage, shortenString } from "../../utils/helpers";
import { Loader } from "../loader/Loader";
import { Select } from "../select/Select";
import { newsListStyles } from "./NewsList.styles";

export const NewsList = () => {
  const {
    isLoading,
    fetchTopHeadlines,
    pageSize,
    setPageSize,
    country,
    setCountry,
    articles,
  } = useContext(NewsContext);

  const handleNewsClick = (url: string) => {
    window.open(url, "_blank");
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = availableCountires.find(
      (country) => country.value === event.target.value
    );
    if (selectedCountry) {
      setCountry(selectedCountry);
      setFilterToLocalStorage(FilterDataKeys.COUNTRY, selectedCountry);
    }
  };

  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedPageSize = availablePageSizes.find(
      (pageSize) => pageSize.value === event.target.value
    );
    if (selectedPageSize) {
      setPageSize(selectedPageSize);
      setFilterToLocalStorage(FilterDataKeys.PAGE_SIZE, selectedPageSize);
    }
  };

  useEffect(() => {
    fetchTopHeadlines();
  }, [pageSize, country]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <header>
        <h1 css={newsListStyles.title}>
          Wyświetlono {pageSize.label} najnowszych wiadomości dla kraju{" "}
          {country.label}
        </h1>
      </header>
      <section css={newsListStyles.filtersContainer}>
        <Select
          id={FilterDataKeys.COUNTRY}
          data={availableCountires}
          currentValue={country.value}
          onChange={handleCountryChange}
        />
        <Select
          id={FilterDataKeys.PAGE_SIZE}
          data={availablePageSizes}
          currentValue={pageSize.value}
          onChange={handlePageSizeChange}
        />
      </section>
      <section css={newsListStyles.newsContainer}>
        {articles.map((article, index) => {
          const { urlToImage, title, publishedAt, url, description } = article;
          return (
            <div
              key={index}
              css={newsListStyles.newsContent}
              onClick={() => handleNewsClick(url)}
            >
              <img css={newsListStyles.image} src={urlToImage} />
              <div>
                <h3>{title}</h3>
                <p>{new Date(publishedAt).toLocaleDateString()}</p>
                <p>{shortenString(description, 60)}</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
