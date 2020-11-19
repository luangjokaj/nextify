import React from "react";
import { css } from "@emotion/react";
import { Page } from "../components/Pages";

const coverImg = "https://via.placeholder.com/1280x670";

const color = "white";

function Index({ posts = [] }) {
	return (
		<Page title="Home" description="Hello world">
			<div>
				<br />
				<h1>Hello world!</h1>
				<br />
				<div
					css={css`
						padding: 32px;
						background-color: hotpink;
						font-size: 24px;
						border-radius: 4px;
						&:hover {
							color: ${color};
						}
					`}
				>
					Hover to change color.
				</div>
			</div>
		</Page>
	);
}

export default Index;
