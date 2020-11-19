import { Global, css } from "@emotion/react";
import { withRouter, useRouter } from "next/router";

export const globalStyles = (
	<Global
		styles={css`
			html,
			body {
				padding: 0;
				margin: 0;
				background: papayawhip;
				min-height: 100%;
				font-family: Helvetica, Arial, sans-serif;
				font-size: 24px;
			}
		`}
	/>
);

function App({ Component, pageProps, router }) {
	const { query } = useRouter();

	return <>{globalStyles}<Component {...pageProps} /></>;
}

export default withRouter(App);
