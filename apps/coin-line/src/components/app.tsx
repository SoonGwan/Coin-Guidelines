import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../style/DefaultTheme';
import { useRecoilValue } from 'recoil';
import { Theme } from '../atom/Theme.atom';
import { GloabalStyle } from '../style/GlobalStyle';

export const App = () => {
  const isDark = useRecoilValue(Theme);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GloabalStyle />
      <div>Hi</div>
    </ThemeProvider>
  );
};

export default App;
