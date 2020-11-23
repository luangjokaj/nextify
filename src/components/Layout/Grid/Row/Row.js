import React from "react";
import { rowStyles } from "./Row.styles";

function Row({
	id,
	className,
	children,
	alignItems,
	justifyContent,
	gapsXs = "default",
	gapsSm,
	gapsMd,
	gapsLg,
	gapsXl,
	gapsXxl,
	gapsXxxl,
}) {
	return (
		<div
			css={rowStyles(
				alignItems,
				justifyContent,
				gapsXs,
				gapsSm,
				gapsMd,
				gapsLg,
				gapsXl,
				gapsXxl,
				gapsXxxl,
			)}
			id={id}
			className={className}
			data-row
		>
			{children}
		</div>
	);
}

export { Row };
