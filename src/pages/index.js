import React from "react";
import { css } from "@emotion/react";
import { Page } from "../components/Pages";
import { Container } from "../components/Layout";

const coverImg = "https://via.placeholder.com/1280x670";

function Index({ posts = [] }) {
	return (
		<Page title="Nextify" description="Hello world">
			<Container>
				<br />
				<h1>Nextify</h1>
				<br />
				<div
					css={(theme) => css`
						padding: 32px;
						background-color: hotpink;
						font-size: 24px;
						border-radius: 4px;
						&:hover {
							color: ${theme.colors.primary};
						}
					`}
				>
					Hello world
				</div>
			</Container>
		</Page>
	);
}

export default Index;
