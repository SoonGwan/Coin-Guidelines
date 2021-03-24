import { Global, css, jsx } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import { Theme } from 'atom/Theme.atom';
import { darkTheme, lightTheme } from './DefaultTheme';
export const GlobalStyle = () => {
  const isDark = useRecoilValue(Theme);

  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          color: ${isDark ? darkTheme.basicFont : lightTheme.basicFont};
          background-color: ${isDark ? darkTheme.basicBg : lightTheme.basicBg};
        }
      `}
    />
  );
};
