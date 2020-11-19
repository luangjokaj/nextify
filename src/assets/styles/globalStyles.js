import { Global, css } from "@emotion/react";
import { theme } from "./theme";

const globalStyles = (
	<Global
		styles={css`
			html,
			body {
				padding: 0;
				margin: 0;
				background: ${theme.colors.primary};
				min-height: 100%;
				font-family: Helvetica, Arial, sans-serif;
				font-size: 24px;
			}
		`}
	/>
);

export { globalStyles };
