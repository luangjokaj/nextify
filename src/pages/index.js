import React from "react";
import { css } from "@emotion/react";
import { Container, H1, Space } from "cherry-components";
import { Page } from "../components/Pages";
import { Logo } from "../assets/svg/Logo";

function Index({ posts = [] }) {
	return (
		<Page title="Home" description="Hello world">
			<Container>
				<Space size={20} />
				<H1>
					<Logo />
				</H1>
				<Space size={20} />
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
