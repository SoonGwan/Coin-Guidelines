import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../style/DefaultTheme';
import { useRecoilValue } from 'recoil';
import { Theme } from '../atom/Theme.atom';
import { GloabalStyle } from '../style/GlobalStyle';
import { CoinCard } from '@coin-line/component-ui';

export const App = () => {
	const isDark = useRecoilValue(Theme);
	const theme = isDark ? darkTheme : lightTheme;

	return (
		<ThemeProvider theme={theme}>
			<GloabalStyle />
		</ThemeProvider>
	);
};

export default App;
