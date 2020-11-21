import React from "react";
import { css } from "@emotion/react";
import { Page } from "../components/Pages";
import { Container } from "../components/Layout";
import { Logo } from "../assets/svg/Logo";

function Index({ posts = [] }) {
	return (
		<Page title="Home" description="Hello world">
			<Container>
				<br />
				<h1>
					<Logo />
				</h1>
				<br />
				<div
					css={(theme) => css`
						padding: 32px;
						background-color: ${theme.colors.dark};
						color: ${theme.colors.light};
						font-size: 24px;
						border-radius: 4px;
						transition: all 0.3s ease;

						&:hover {
							background-color: ${theme.colors.primary};
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
