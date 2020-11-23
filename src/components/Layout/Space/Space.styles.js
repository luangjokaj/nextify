import { css } from "@emotion/react";
import { Breakpoints, mq } from "../../../assets/styles/mq";

const spaceStyles = (size, mobileOnly, desktopOnly, horizontal) => css`
	height: ${size}px;

	${horizontal &&
	css`
		display: inline-block;
		height: 0;
		width: ${size}px;
	`}

	${desktopOnly &&
	css`
		display: none;

		${mq(Breakpoints.lg)} {
			display: inline-block;
		}
	`}

			${mobileOnly &&
	css`
		display: inline-block;

		${mq(Breakpoints.lg)} {
			display: none;
		}
	`}
	${mobileOnly &&
	css`
		display: block;

		${horizontal &&
		css`
			display: inline-block;
		`}

		${mq(Breakpoints.lg)} {
			display: none;
		}
	`}

	${desktopOnly &&
	css`
		display: none;

		${mq(Breakpoints.lg)} {
			display: block;

			${horizontal &&
			css`
				display: inline-block;
			`}
		}
	`}
`;

export { spaceStyles };
