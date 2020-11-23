import React from "react";
import { colStyles } from "./Col.styles";

function Col({
	id,
	className,
	children,
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
}) {
	return (
		<div
			css={colStyles(
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
			)}
			className={className}
			id={id}
			data-col
		>
			{children}
		</div>
	);
}

export { Col };
