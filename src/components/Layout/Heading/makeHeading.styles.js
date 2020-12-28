import { css } from "@emotion/react";
import { Breakpoints, mq } from "../../../assets/styles/mq";

const headerStyles = (theme, size, h) => css`
	font-family: ${theme.fonts.head};
	font-weight: 800;
	margin: 0;

	${h === 1 &&
	css`
		font-size: ${theme.sizes.h1.size.mobile};
		line-height: ${theme.sizes.h1.lineheight.mobile};

		${mq(Breakpoints.lg)} {
			font-size: ${theme.sizes.h1.size.desktop};
			line-height: ${theme.sizes.h1.lineheight.desktop};
		}
	`}

	${h === 2 &&
	css`
		font-size: ${theme.sizes.h2.size.mobile};
		line-height: ${theme.sizes.h2.lineheight.mobile};

		${mq(Breakpoints.lg)} {
			font-size: ${theme.sizes.h2.size.desktop};
			line-height: ${theme.sizes.h2.lineheight.desktop};
		}
	`}

	${h === 3 &&
	css`
		font-size: ${theme.sizes.h3.size.mobile};
		line-height: ${theme.sizes.h3.lineheight.mobile};

		${mq(Breakpoints.lg)} {
			font-size: ${theme.sizes.h3.size.desktop};
			line-height: ${theme.sizes.h3.lineheight.desktop};
		}
	`}

	${h === 4 &&
	css`
		font-size: ${theme.sizes.h4.size.mobile};
		line-height: ${theme.sizes.h4.lineheight.mobile};

		${mq(Breakpoints.lg)} {
			font-size: ${theme.sizes.h4.size.desktop};
			line-height: ${theme.sizes.h4.lineheight.desktop};
		}
	`}

	${h === 5 &&
	css`
		font-size: ${theme.sizes.h5.size.mobile};
		line-height: ${theme.sizes.h5.lineheight.mobile};

		${mq(Breakpoints.lg)} {
			font-size: ${theme.sizes.h5.size.desktop};
			line-height: ${theme.sizes.h5.lineheight.desktop};
		}
	`}

	${h === 6 &&
	css`
		font-size: ${theme.sizes.h6.size.mobile};
		line-height: ${theme.sizes.h6.lineheight.mobile};

		${mq(Breakpoints.lg)} {
			font-size: ${theme.sizes.h6.size.desktop};
			line-height: ${theme.sizes.h6.lineheight.desktop};
		}
	`}


	${size === "h1" &&
	css`
		font-size: ${theme.sizes.h1.size.mobile};
		line-height: ${theme.sizes.h1.lineheight.mobile};

		${mq(Breakpoints.lg)} {
			font-size: ${theme.sizes.h1.size.desktop};
			line-height: ${theme.sizes.h1.lineheight.desktop};
		}
	`}

	${size === "h2" &&
	css`
		font-size: ${theme.sizes.h2.size.mobile};
		line-height: ${theme.sizes.h2.lineheight.mobile};

		${mq(Breakpoints.lg)} {
			font-size: ${theme.sizes.h2.size.desktop};
			line-height: ${theme.sizes.h2.lineheight.desktop};
		}
	`}

	${size === "h3" &&
	css`
		font-size: ${theme.sizes.h3.size.mobile};
		line-height: ${theme.sizes.h3.lineheight.mobile};

		${mq(Breakpoints.lg)} {
			font-size: ${theme.sizes.h3.size.desktop};
			line-height: ${theme.sizes.h3.lineheight.desktop};
		}
	`}

	${size === "h4" &&
	css`
		font-size: ${theme.sizes.h4.size.mobile};
		line-height: ${theme.sizes.h4.lineheight.mobile};

		${mq(Breakpoints.lg)} {
			font-size: ${theme.sizes.h4.size.desktop};
			line-height: ${theme.sizes.h4.lineheight.desktop};
		}
	`}

	${size === "h5" &&
	css`
		font-size: ${theme.sizes.h5.size.mobile};
		line-height: ${theme.sizes.h5.lineheight.mobile};

		${mq(Breakpoints.lg)} {
			font-size: ${theme.sizes.h5.size.desktop};
			line-height: ${theme.sizes.h5.lineheight.desktop};
		}
	`}

	${size === "h6" &&
	css`
		font-size: ${theme.sizes.h6.size.mobile};
		line-height: ${theme.sizes.h6.lineheight.mobile};

		${mq(Breakpoints.lg)} {
			font-size: ${theme.sizes.h6.size.desktop};
			line-height: ${theme.sizes.h6.lineheight.desktop};
		}
	`}

	${size === "hero1" &&
	css`
		font-size: ${theme.sizes.hero1.size.mobile};
		line-height: ${theme.sizes.hero1.lineheight.mobile};

		${mq(Breakpoints.lg)} {
			font-size: ${theme.sizes.hero1.size.desktop};
			line-height: ${theme.sizes.hero1.lineheight.desktop};
		}
	`}

	${size === "hero2" &&
	css`
		font-size: ${theme.sizes.hero2.size.mobile};
		line-height: ${theme.sizes.hero2.lineheight.mobile};

		${mq(Breakpoints.lg)} {
			font-size: ${theme.sizes.hero2.size.desktop};
			line-height: ${theme.sizes.hero2.lineheight.desktop};
		}
	`}

	${size === "hero3" &&
	css`
		font-size: ${theme.sizes.hero3.size.mobile};
		line-height: ${theme.sizes.hero3.lineheight.mobile};

		${mq(Breakpoints.lg)} {
			font-size: ${theme.sizes.hero3.size.desktop};
			line-height: ${theme.sizes.hero3.lineheight.desktop};
		}
	`}
`;

export { headerStyles };
