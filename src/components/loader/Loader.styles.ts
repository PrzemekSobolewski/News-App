import { css, keyframes } from "@emotion/react";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const loaderStyles = {
  loaderContainer: css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    position: relative;
    background-color: #dedede;
    opacity: 0.8;
  `,
  loader: css`
    display: inline-block;
    width: 80px;
    height: 80px;
    &::after {
      content: " ";
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid #87ceeb;
      border-color: #87ceeb transparent #87ceeb transparent;
      animation: ${spin} 1.2s linear infinite;
    }
  `,
};
