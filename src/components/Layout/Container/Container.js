import React from "react";
import { useTheme } from "@emotion/react";
import * as styles from "./Container.styles";

function Container({ children }) {
	const theme = useTheme();
	return <div css={styles.containerStyles(theme)}>{children}</div>;
}

export { Container };
