import React from "react";
import * as styles from "./Container.styles";

function Container({ children }) {
	return <div css={styles.containerStyles}>{children}</div>;
}

export { Container };
