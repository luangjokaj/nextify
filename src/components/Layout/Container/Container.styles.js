import { css, useTheme } from "@emotion/react";

const containerStyles = (theme) => css`
	max-width: 1400px;
	margin: auto;
	padding: 0 20px;
	background: ${theme.colors.primary};
	color: red;
`;

export { containerStyles };
