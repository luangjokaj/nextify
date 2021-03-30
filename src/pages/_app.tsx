import { ThemeProvider } from "@emotion/react";
import { globalStyles } from "../assets/styles/globalStyles";
import { theme } from "../assets/styles/theme";

function App({ Component, pageProps }) {
	return (
		<>
			{globalStyles}
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default App;
