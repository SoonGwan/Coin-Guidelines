import { Global, css, jsx } from '@emotion/react';

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
      `}
    />
  );
};
