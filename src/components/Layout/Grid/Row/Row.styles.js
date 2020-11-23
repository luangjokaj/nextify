import { css } from "@emotion/react";
import { Breakpoints, mq } from "../../../../assets/styles/mq";

const row = css`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const rowStyles = (
	alignItems,
	justifyContent,
	gapsXs,
	gapsSm,
	gapsMd,
	gapsLg,
	gapsXl,
	gapsXxl,
	gapsXxxl,
) => (theme) => css`
	${row}
	${alignItems === "stretch" &&
	css`
		align-items: stretch;
	`}

	${alignItems === "center" &&
	css`
		align-items: center;
	`}

	${alignItems === "flex-start" &&
	css`
		align-items: flex-start;
	`}

	${alignItems === "flex-end" &&
	css`
		align-items: flex-end;
	`}

	${alignItems === "baseline" &&
	css`
		align-items: baseline;
	`}

	${alignItems === "initial" &&
	css`
		align-items: initial;
	`}

	${justifyContent === "flex-start" &&
	css`
		justify-content: flex-start;
	`}

	${justifyContent === "flex-end" &&
	css`
		justify-content: flex-end;
	`}

	${justifyContent === "center" &&
	css`
		justify-content: center;
	`}

	${justifyContent === "space-between" &&
	css`
		justify-content: space-between;
	`}

	${justifyContent === "space-around" &&
	css`
		justify-content: space-around;
	`}

	${justifyContent === "initial" &&
	css`
		justify-content: initial;
	`}

	${mq(Breakpoints.xs)} {
		${gapsXs === "default" &&
		css`
			margin-right: ${theme.spacing.marginRow.default};
			margin-left: ${theme.spacing.marginRow.default};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.default};
				padding-left: ${theme.spacing.gutterCol.default};
			}
		`}

		${gapsXs === "medium" &&
		css`
			margin-right: ${theme.spacing.marginRow.medium};
			margin-left: ${theme.spacing.marginRow.medium};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.medium};
				padding-left: ${theme.spacing.gutterCol.medium};
			}
		`}

		${gapsXs === "big" &&
		css`
			margin-right: ${theme.spacing.marginRow.big};
			margin-left: ${theme.spacing.marginRow.big};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.big};
				padding-left: ${theme.spacing.gutterCol.big};
			}
		`}
	}

	${mq(Breakpoints.sm)} {
		${gapsSm === "default" &&
		css`
			margin-right: ${theme.spacing.marginRow.default};
			margin-left: ${theme.spacing.marginRow.default};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.default};
				padding-left: ${theme.spacing.gutterCol.default};
			}
		`}

		${gapsSm === "medium" &&
		css`
			margin-right: ${theme.spacing.marginRow.medium};
			margin-left: ${theme.spacing.marginRow.medium};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.medium};
				padding-left: ${theme.spacing.gutterCol.medium};
			}
		`}

		${gapsSm === "big" &&
		css`
			margin-right: ${theme.spacing.marginRow.big};
			margin-left: ${theme.spacing.marginRow.big};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.big};
				padding-left: ${theme.spacing.gutterCol.big};
			}
		`}
	}

	${mq(Breakpoints.md)} {
		${gapsMd === "default" &&
		css`
			margin-right: ${theme.spacing.marginRow.default};
			margin-left: ${theme.spacing.marginRow.default};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.default};
				padding-left: ${theme.spacing.gutterCol.default};
			}
		`}

		${gapsMd === "medium" &&
		css`
			margin-right: ${theme.spacing.marginRow.medium};
			margin-left: ${theme.spacing.marginRow.medium};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.medium};
				padding-left: ${theme.spacing.gutterCol.medium};
			}
		`}

		${gapsMd === "big" &&
		css`
			margin-right: ${theme.spacing.marginRow.big};
			margin-left: ${theme.spacing.marginRow.big};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.big};
				padding-left: ${theme.spacing.gutterCol.big};
			}
		`}
	}

	${mq(Breakpoints.lg)} {
		${gapsLg === "default" &&
		css`
			margin-right: ${theme.spacing.marginRow.default};
			margin-left: ${theme.spacing.marginRow.default};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.default};
				padding-left: ${theme.spacing.gutterCol.default};
			}
		`}

		${gapsLg === "medium" &&
		css`
			margin-right: ${theme.spacing.marginRow.medium};
			margin-left: ${theme.spacing.marginRow.medium};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.medium};
				padding-left: ${theme.spacing.gutterCol.medium};
			}
		`}

		${gapsLg === "big" &&
		css`
			margin-right: ${theme.spacing.marginRow.big};
			margin-left: ${theme.spacing.marginRow.big};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.big};
				padding-left: ${theme.spacing.gutterCol.big};
			}
		`}
	}

	${mq(Breakpoints.xl)} {
		${gapsXl === "default" &&
		css`
			margin-right: ${theme.spacing.marginRow.default};
			margin-left: ${theme.spacing.marginRow.default};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.default};
				padding-left: ${theme.spacing.gutterCol.default};
			}
		`}

		${gapsXl === "medium" &&
		css`
			margin-right: ${theme.spacing.marginRow.medium};
			margin-left: ${theme.spacing.marginRow.medium};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.medium};
				padding-left: ${theme.spacing.gutterCol.medium};
			}
		`}

		${gapsXl === "big" &&
		css`
			margin-right: ${theme.spacing.marginRow.big};
			margin-left: ${theme.spacing.marginRow.big};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.big};
				padding-left: ${theme.spacing.gutterCol.big};
			}
		`}
	}

	${mq(Breakpoints.xxl)} {
		${gapsXxl === "default" &&
		css`
			margin-right: ${theme.spacing.marginRow.default};
			margin-left: ${theme.spacing.marginRow.default};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.default};
				padding-left: ${theme.spacing.gutterCol.default};
			}
		`}

		${gapsXxl === "medium" &&
		css`
			margin-right: ${theme.spacing.marginRow.medium};
			margin-left: ${theme.spacing.marginRow.medium};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.medium};
				padding-left: ${theme.spacing.gutterCol.medium};
			}
		`}

		${gapsXxl === "big" &&
		css`
			margin-right: ${theme.spacing.marginRow.big};
			margin-left: ${theme.spacing.marginRow.big};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.big};
				padding-left: ${theme.spacing.gutterCol.big};
			}
		`}
	}

	${mq(Breakpoints.xxxl)} {
		${gapsXxxl === "default" &&
		css`
			margin-right: ${theme.spacing.marginRow.default};
			margin-left: ${theme.spacing.marginRow.default};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.default};
				padding-left: ${theme.spacing.gutterCol.default};
			}
		`}

		${gapsXxxl === "medium" &&
		css`
			margin-right: ${theme.spacing.marginRow.medium};
			margin-left: ${theme.spacing.marginRow.medium};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.medium};
				padding-left: ${theme.spacing.gutterCol.medium};
			}
		`}

		${gapsXxxl === "big" &&
		css`
			margin-right: ${theme.spacing.marginRow.big};
			margin-left: ${theme.spacing.marginRow.big};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.big};
				padding-left: ${theme.spacing.gutterCol.big};
			}
		`}
	}
`;

export { rowStyles };
