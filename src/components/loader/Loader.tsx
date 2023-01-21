import { loaderStyles } from "./Loader.styles";

export const Loader = () => (
  <div css={loaderStyles.loaderContainer}>
    <div css={loaderStyles.loader} />
  </div>
);
