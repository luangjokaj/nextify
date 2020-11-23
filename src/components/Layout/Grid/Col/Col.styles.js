import { css } from "@emotion/react";
import { Breakpoints, mq } from "../../../../assets/styles/mq";

const col = css`
	position: relative;
	width: 100%;
	min-height: 1px;
	flex-basis: 0;
	flex-grow: 1;
	max-width: 100%;
	box-sizing: border-box;
`;

const colAuto = css`
	${col}
	flex: 0 0 auto;
	width: auto;
	max-width: none;
`;

const col1 = css`
	${col}
	flex: 0 0 8.333333%;
	max-width: 8.333333%;
`;

const col2 = css`
	${col}
	flex: 0 0 16.666667%;
	max-width: 16.666667%;
`;

const col3 = css`
	${col}
	flex: 0 0 25%;
	max-width: 25%;
`;

const col4 = css`
	${col}
	flex: 0 0 33.333333%;
	max-width: 33.333333%;
`;

const col5 = css`
	${col}
	flex: 0 0 41.666667%;
	max-width: 41.666667%;
`;

const col6 = css`
	${col}
	flex: 0 0 50%;
	max-width: 50%;
`;

const col7 = css`
	${col}
	flex: 0 0 58.333333%;
	max-width: 58.333333%;
`;

const col8 = css`
	${col}
	flex: 0 0 66.666667%;
	max-width: 66.666667%;
`;

const col9 = css`
	${col}
	flex: 0 0 75%;
	max-width: 75%;
`;

const col10 = css`
	${col}
	flex: 0 0 83.333333%;
	max-width: 83.333333%;
`;

const col11 = css`
	${col}
	flex: 0 0 91.666667%;
	max-width: 91.666667%;
`;

const col12 = css`
	${col}
	flex: 0 0 100%;
	max-width: 100%;
`;

const colStyles = (
	textAlign,
	xs,
	sm,
	md,
	lg,
	xl,
	xxl,
	xxxl,
	first,
	firstXs,
	firstSm,
	firstMd,
	firstLg,
	firstXl,
	firstXxl,
	firstXxxl,
	last,
	lastXs,
	lastSm,
	lastMd,
	lastLg,
	lastXl,
	lastXxl,
	lastXxxl,
) => css`
	${textAlign === "left" &&
	css`
		text-align: left;
	`}

	${textAlign === "center" &&
	css`
		text-align: center;
	`}

	${textAlign === "right" &&
	css`
		text-align: right;
	`}

	${first &&
	css`
		order: -1;
	`}

	${last &&
	css`
		order: -1;
	`}

	${mq(Breakpoints.xs)} {
		${firstXs &&
		css`
			order: -1;
		`}

		${lastXs &&
		css`
			order: -1;
		`}

		${xs === "auto" &&
		css`
			${colAuto}
		`}
		${xs === 1 &&
		css`
			${col1}
		`}
		${xs === 2 &&
		css`
			${col2}
		`}
		${xs === 3 &&
		css`
			${col3}
		`}
		${xs === 4 &&
		css`
			${col4}
		`}
		${xs === 5 &&
		css`
			${col5}
		`}
		${xs === 6 &&
		css`
			${col6}
		`}
		${xs === 7 &&
		css`
			${col7}
		`}
		${xs === 8 &&
		css`
			${col8}
		`}
		${xs === 9 &&
		css`
			${col9}
		`}
		${xs === 10 &&
		css`
			${col10}
		`}
		${xs === 11 &&
		css`
			${col11}
		`}
		${xs === 12 &&
		css`
			${col12}
		`}
	}

	${mq(Breakpoints.sm)} {
		${firstSm &&
		css`
			order: -1;
		`}

		${lastSm &&
		css`
			order: -1;
		`}

		${sm === "auto" &&
		css`
			${colAuto}
		`}
		${sm === 1 &&
		css`
			${col1}
		`}
		${sm === 2 &&
		css`
			${col2}
		`}
		${sm === 3 &&
		css`
			${col3}
		`}
		${sm === 4 &&
		css`
			${col4}
		`}
		${sm === 5 &&
		css`
			${col5}
		`}
		${sm === 6 &&
		css`
			${col6}
		`}
		${sm === 7 &&
		css`
			${col7}
		`}
		${sm === 8 &&
		css`
			${col8}
		`}
		${sm === 9 &&
		css`
			${col9}
		`}
		${sm === 10 &&
		css`
			${col10}
		`}
		${sm === 11 &&
		css`
			${col11}
		`}
		${sm === 12 &&
		css`
			${col12}
		`}
	}

	${mq(Breakpoints.md)} {
		${firstMd &&
		css`
			order: -1;
		`}

		${lastMd &&
		css`
			order: -1;
		`}

		${md === "auto" &&
		css`
			${colAuto}
		`}
		${md === 1 &&
		css`
			${col1}
		`}
		${md === 2 &&
		css`
			${col2}
		`}
		${md === 3 &&
		css`
			${col3}
		`}
		${md === 4 &&
		css`
			${col4}
		`}
		${md === 5 &&
		css`
			${col5}
		`}
		${md === 6 &&
		css`
			${col6}
		`}
		${md === 7 &&
		css`
			${col7}
		`}
		${md === 8 &&
		css`
			${col8}
		`}
		${md === 9 &&
		css`
			${col9}
		`}
		${md === 10 &&
		css`
			${col10}
		`}
		${md === 11 &&
		css`
			${col11}
		`}
		${md === 12 &&
		css`
			${col12}
		`}
	}

	${mq(Breakpoints.lg)} {
		${firstLg &&
		css`
			order: -1;
		`}

		${lastLg &&
		css`
			order: -1;
		`}

		${lg === "auto" &&
		css`
			${colAuto}
		`}
		${lg === 1 &&
		css`
			${col1}
		`}
		${lg === 2 &&
		css`
			${col2}
		`}
		${lg === 3 &&
		css`
			${col3}
		`}
		${lg === 4 &&
		css`
			${col4}
		`}
		${lg === 5 &&
		css`
			${col5}
		`}
		${lg === 6 &&
		css`
			${col6}
		`}
		${lg === 7 &&
		css`
			${col7}
		`}
		${lg === 8 &&
		css`
			${col8}
		`}
		${lg === 9 &&
		css`
			${col9}
		`}
		${lg === 10 &&
		css`
			${col10}
		`}
		${lg === 11 &&
		css`
			${col11}
		`}
		${lg === 12 &&
		css`
			${col12}
		`}
	}

	${mq(Breakpoints.xl)} {
		${firstXl &&
		css`
			order: -1;
		`}

		${lastXl &&
		css`
			order: -1;
		`}

		${xl === "auto" &&
		css`
			${colAuto}
		`}
		${xl === 1 &&
		css`
			${col1}
		`}
		${xl === 2 &&
		css`
			${col2}
		`}
		${xl === 3 &&
		css`
			${col3}
		`}
		${xl === 4 &&
		css`
			${col4}
		`}
		${xl === 5 &&
		css`
			${col5}
		`}
		${xl === 6 &&
		css`
			${col6}
		`}
		${xl === 7 &&
		css`
			${col7}
		`}
		${xl === 8 &&
		css`
			${col8}
		`}
		${xl === 9 &&
		css`
			${col9}
		`}
		${xl === 10 &&
		css`
			${col10}
		`}
		${xl === 11 &&
		css`
			${col11}
		`}
		${xl === 12 &&
		css`
			${col12}
		`}
	}

	${mq(Breakpoints.xxl)} {
		${firstXxl &&
		css`
			order: -1;
		`}

		${lastXxl &&
		css`
			order: -1;
		`}

		${xxl === "auto" &&
		css`
			${colAuto}
		`}
		${xxl === 1 &&
		css`
			${col1}
		`}
		${xxl === 2 &&
		css`
			${col2}
		`}
		${xxl === 3 &&
		css`
			${col3}
		`}
		${xxl === 4 &&
		css`
			${col4}
		`}
		${xxl === 5 &&
		css`
			${col5}
		`}
		${xxl === 6 &&
		css`
			${col6}
		`}
		${xxl === 7 &&
		css`
			${col7}
		`}
		${xxl === 8 &&
		css`
			${col8}
		`}
		${xxl === 9 &&
		css`
			${col9}
		`}
		${xxl === 10 &&
		css`
			${col10}
		`}
		${xxl === 11 &&
		css`
			${col11}
		`}
		${xxl === 12 &&
		css`
			${col12}
		`}
	}

	${mq(Breakpoints.xxxl)} {
		${firstXxxl &&
		css`
			order: -1;
		`}

		${lastXxxl &&
		css`
			order: -1;
		`}

		${xxxl === "auto" &&
		css`
			${colAuto}
		`}
		${xxxl === 1 &&
		css`
			${col1}
		`}
		${xxxl === 2 &&
		css`
			${col2}
		`}
		${xxxl === 3 &&
		css`
			${col3}
		`}
		${xxxl === 4 &&
		css`
			${col4}
		`}
		${xxxl === 5 &&
		css`
			${col5}
		`}
		${xxxl === 6 &&
		css`
			${col6}
		`}
		${xxxl === 7 &&
		css`
			${col7}
		`}
		${xxxl === 8 &&
		css`
			${col8}
		`}
		${xxxl === 9 &&
		css`
			${col9}
		`}
		${xxxl === 10 &&
		css`
			${col10}
		`}
		${xxxl === 11 &&
		css`
			${col11}
		`}
		${xxxl === 12 &&
		css`
			${col12}
		`}
	}
`;

export { colStyles };
