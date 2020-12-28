import { css } from "@emotion/react";
import { Breakpoints, mq } from "../../../assets/styles/mq";

const localStyle = (size, horizontal) =>
	horizontal
		? css`
				display: inline-block;
				height: 0;
				width: ${size}px;
		  `
		: css`
				display: block;
				height: ${size}px;
		  `;

const spaceStyles = (
	size,
	xsSize,
	smSize,
	mdSize,
	lgSize,
	xlSize,
	xxlSize,
	xxxlSize,
	horizontal,
) => css`
	${size &&
	css`
		${horizontal ? localStyle(size, true) : localStyle(size, false)}
	`}

	${size === "none" &&
	css`
		display: none;
	`}

	${xsSize &&
	css`
		${mq(Breakpoints.xs)} {
			${horizontal ? localStyle(xsSize, true) : localStyle(xsSize, false)}
		}
	`}

	${xsSize === "none" &&
	css`
		${mq(Breakpoints.xs)} {
			display: none;
		}
	`}

	${smSize &&
	css`
		${mq(Breakpoints.sm)} {
			${horizontal ? localStyle(smSize, true) : localStyle(smSize, false)}
		}
	`}

	${smSize === "none" &&
	css`
		${mq(Breakpoints.sm)} {
			display: none;
		}
	`}

	${mdSize &&
	css`
		${mq(Breakpoints.md)} {
			${horizontal ? localStyle(mdSize, true) : localStyle(mdSize, false)}
		}
	`}

	${mdSize === "none" &&
	css`
		${mq(Breakpoints.md)} {
			display: none;
		}
	`}

	${lgSize &&
	css`
		${mq(Breakpoints.lg)} {
			${horizontal ? localStyle(lgSize, true) : localStyle(lgSize, false)}
		}
	`}

	${lgSize === "none" &&
	css`
		${mq(Breakpoints.lg)} {
			display: none;
		}
	`}

	${xlSize &&
	css`
		${mq(Breakpoints.xl)} {
			${horizontal ? localStyle(xlSize, true) : localStyle(xlSize, false)}
		}
	`}

	${xlSize === "none" &&
	css`
		${mq(Breakpoints.xl)} {
			display: none;
		}
	`}

	${xxlSize &&
	css`
		${mq(Breakpoints.xxl)} {
			${horizontal
				? localStyle(xxlSize, true)
				: localStyle(xxlSize, false)}
		}
	`}

	${xxlSize === "none" &&
	css`
		${mq(Breakpoints.xxl)} {
			display: none;
		}
	`}

	${xxxlSize &&
	css`
		${mq(Breakpoints.xxxl)} {
			${horizontal
				? localStyle(xxxlSize, true)
				: localStyle(xxxlSize, false)}
		}
	`}

	${xxxlSize === "none" &&
	css`
		${mq(Breakpoints.xxxl)} {
			display: none;
		}
	`}
`;

export { spaceStyles };
