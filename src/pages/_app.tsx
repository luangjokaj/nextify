import React from "react";
import { ThemeProvider } from "@emotion/react";
import { globalStyles } from "../assets/styles/globalStyles";
import { theme } from "../assets/styles/theme";

function App({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider theme={theme}>
				{globalStyles}
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default App;
