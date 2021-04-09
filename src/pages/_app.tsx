import { ThemeProvider } from "@emotion/react";
import Head from "next/head";
import { globalStyles } from "../assets/styles/globalStyles";
import { theme } from "../assets/styles/theme";

function App({ Component, pageProps }) {
	return (
		<>
			{globalStyles}
			<Head>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					rel="preload"
					as="style"
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
					media="print"
					onLoad="this.media='all'"
				/>
				<noscript>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
					/>
				</noscript>
			</Head>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default App;
