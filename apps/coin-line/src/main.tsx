import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@primer/components";
import App from "./components/app";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./slices";

const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<Provider store={store}>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</Provider>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById("root")
);
