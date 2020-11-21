import React from "react";
import { useTheme } from "@emotion/react";
import * as styles from "./Container.styles";

function Container({ children, fluid }) {
	const theme = useTheme();
	return <div css={styles.containerStyles(theme, fluid)}>{children}</div>;
}

export { Container };
