import React from "react";
import * as styles from "./Container.styles";

function Container({ children, fluid, className, textAlign }) {
	return (
		<div
			css={(theme) => styles.containerStyles(theme, fluid, textAlign)}
			className={className}
			data-container
		>
			{children}
		</div>
	);
}

export { Container };
