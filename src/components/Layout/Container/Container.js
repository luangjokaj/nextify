import React from "react";
import * as styles from "./Container.styles";

function Container({ children, fluid, className, align }) {
	return (
		<div
			css={(theme) => styles.containerStyles(theme, fluid, align)}
			className={className}
			data-container
		>
			{children}
		</div>
	);
}

export { Container };
