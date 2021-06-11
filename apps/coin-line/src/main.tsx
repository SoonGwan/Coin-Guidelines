import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@primer/components";
import App from "./components/app";
ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById("root")
);
