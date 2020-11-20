import { Global, css } from "@emotion/react";
import { Breakpoints, mq } from "./mq";
import { theme } from "./theme";

const globalStyles = (
	<Global
		styles={css`
			html,
			body {
				padding: 0;
				margin: 0;
				background: ${theme.colors.light};
				min-height: 100%;
				font-family: Helvetica, Arial, sans-serif;
				font-size: 24px;

				${mq(Breakpoints.lg)} {
					clear: both;
				}
			}
		`}
	/>
);

export { globalStyles };
