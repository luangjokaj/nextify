import React from "react";
import { spaceStyles } from "./Space.styles";

function Space({ size, mobileOnly, desktopOnly, horizontal }) {
	return <div css={spaceStyles(size, mobileOnly, desktopOnly, horizontal)} />;
}

export { Space };
