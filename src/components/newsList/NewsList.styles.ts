import { css } from "@emotion/react";

export const newsListStyles = {
  title: css`
    text-align: center;
    padding: 0 32px;
    @media only screen and (max-width: 1024px) {
      padding: 0 24px;
    }
    @media only screen and (max-width: 560px) {
      padding: 0 16px;
    }
  `,
  newsContainer: css`
    padding: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: start;
    margin-bottom: 32px;
    @media only screen and (max-width: 1024px) {
      padding: 24px;
      margin-bottom: 24px;
      gap: 24px;
    }
    @media only screen and (max-width: 560px) {
      padding: 16px;
      grid-template-columns: 1fr;
      margin-bottom: 16px;
    }
  `,
  newsContent: css`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
    border: 1px solid #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-radius: 4px;
    box-sizing: border-box;
    &:hover {
      border: 1px solid #dedede;
    }
  `,
  image: css`
    width: 100%;
  `,
  filtersContainer: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 32px;
    @media only screen and (max-width: 1024px) {
      margin: 0 24px;
    }
    @media only screen and (max-width: 560px) {
      justify-content: center;
      margin: 0 16px;
    }
  `,
};
