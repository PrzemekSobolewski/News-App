import { css } from "@emotion/react";

export const selectStyles = {
  label: css`
    position: relative;
    margin-right: 16px;
    &:last-of-type {
      margin-right: 0px;
    }
  `,
  select: css`
    position: relative;
    max-width: 200px;
    -webkit-appearance: none;
    padding: 7px 40px 7px 12px;
    width: 100%;
    border: 1px solid #e8eaed;
    border-radius: 4px;
    background: white;
    box-shadow: 0 1px 3px -2px #9098a9;
    cursor: pointer;
    font-family: inherit;
    font-size: 16px;
    transition: all 150ms ease;
  `,
  option: css`
    color: #223254;
    &:focus {
      outline: none;
      border-color: #0077ff;
      box-shadow: 0 0 0 2px rgba(#0077ff, 0.2);
    }
    &:hover {
      stroke: #0077ff;
    }
  `,
  arrowDown: css`
    border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%) rotate(45deg);
  `,
};
