import { withRouter, useRouter } from "next/router";
import "../assets/css/styles.css";

function App({ Component, pageProps, router }) {
	const { query } = useRouter();

	return (
		<>
			<Component {...pageProps} />
		</>
	);
}

export default withRouter(App);
