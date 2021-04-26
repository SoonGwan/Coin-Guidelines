import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../style/DefaultTheme";
import { useRecoilValue } from "recoil";
import { Theme } from "../atom/Theme.atom";
import { GloabalStyle } from "../style/GlobalStyle";
import { CoinCard } from "@coin-line/component-ui";
import * as PAGES from "../pages";
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";

export const App = () => {
	const isDark = useRecoilValue(Theme);
	const theme = isDark ? darkTheme : lightTheme;

	return (
		<ThemeProvider theme={theme}>
			<GloabalStyle />
			<Switch>
				<Route exact path="/" component={PAGES.MainPage} />
				<Route exact path="/coinInfo/:id" component={PAGES.CoinInfoPage} />
				{/* <Redirect to="/" /> */}
			</Switch>
		</ThemeProvider>
	);
};

export default App;
