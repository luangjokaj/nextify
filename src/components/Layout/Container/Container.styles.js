import { css, useTheme } from "@emotion/react";
import { mq, Breakpoints } from "../../../assets/styles/mq";

const containerStyles = (theme, fluid) => css`
	max-width: 1400px;
	margin: auto;
	padding: 0 ${theme.spacing.marginContainer.mobile};

	${mq(Breakpoints.lg)} {
		padding: 0 ${theme.spacing.marginContainer.desktop};
	}

	${fluid && css`
		max-width: 100%;
		widht: 100%;
	`}
`;

export { containerStyles };
