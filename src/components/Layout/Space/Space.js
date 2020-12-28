import React from "react";
import { spaceStyles } from "./Space.styles";

function Space({
	size,
	xsSize,
	smSize,
	mdSize,
	lgSize,
	xlSize,
	xxlSize,
	xxxlSize,
	horizontal,
}) {
	return (
		<div
			css={spaceStyles(
				size,
				xsSize,
				smSize,
				mdSize,
				lgSize,
				xlSize,
				xxlSize,
				xxxlSize,
				horizontal,
			)}
		/>
	);
}

export { Space };
