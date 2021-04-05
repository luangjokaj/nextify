import React from "react";
import { css } from "@emotion/react";
import { Container, H1, Space } from "cherry-components";
import { Page } from "../components/Page";
import { Logo } from "../assets/svg/Logo";

function Index() {
	return (
		<Page title="Home" description="Hello world">
			<Container>
				<Space size={20} />
				<H1>
					<Logo />
				</H1>
				<Space size={20} />
				<div
					css={(theme: any) => css`
						padding: 32px;
						background-color: ${theme.colors.primary};
						color: ${theme.colors.light};
						font-size: ${theme.sizes.h4.size.desktop};
						border-radius: 12px;
						transition: all 0.3s ease;

						&:hover {
							background-color: ${theme.colors.primaryDark};
						}
					`}
				>
					Hello world.
				</div>
			</Container>
		</Page>
	);
}

export default Index;
