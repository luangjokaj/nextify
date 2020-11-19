import { withRouter, useRouter } from "next/router";
import { ThemeProvider, css } from "@emotion/react";
import { globalStyles } from "../assets/styles/globalStyles";
import { theme } from "../assets/styles/theme";

function App({ Component, pageProps, router }) {
	const { query } = useRouter();

	return (
		<>
			{globalStyles}
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default withRouter(App);
