import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../style/DefaultTheme";
import { useRecoilValue } from "recoil";
import { Theme } from "../atom/Theme.atom";
import { GloabalStyle } from "../style/GlobalStyle";
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";

const MainPage = React.lazy(() => import("../pages/MainPage"));
const CoinInfoPage = React.lazy(() => import("../pages/CoinInfoPage"));

export const App = () => {
  const isDark = useRecoilValue(Theme);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <React.Suspense fallback={<></>}>
      <ThemeProvider theme={theme}>
        <GloabalStyle />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/coinInfo/:id" component={CoinInfoPage} />
        </Switch>
      </ThemeProvider>
    </React.Suspense>
  );
};

export default App;
