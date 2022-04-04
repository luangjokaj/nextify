import { theme } from "./theme";
const breakpoints = theme.spacing.breakpoints;

const Breakpoints = {
	xs: 0,
	sm: 1,
	md: 2,
	lg: 3,
	xl: 4,
	xxl: 5,
	xxxl: 6,
};

function mq(minWidth) {
	return `@media screen and (min-width: ${breakpoints[minWidth]}px)`;
}

export { mq, Breakpoints };
