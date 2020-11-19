import { withRouter, useRouter } from "next/router";
import { globalStyles } from "../assets/styles/globalStyles";

function App({ Component, pageProps, router }) {
	const { query } = useRouter();

	return (
		<>
			{globalStyles}
			<Component {...pageProps} />
		</>
	);
}

export default withRouter(App);
