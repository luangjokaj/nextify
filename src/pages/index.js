import React from "react";
import { Container } from "cherry-grid";
import { Page } from "../components/Pages";

const coverImg = "https://via.placeholder.com/1280x670";

function Index({ posts = [] }) {
	return (
		<Page title="Home" description="Hello world">
			<Container>
				<br />
				<h1>Hello world!</h1>
				<br />
			</Container>
		</Page>
	);
}

export default Index;
