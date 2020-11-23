import React from "react";
import { makeHeading } from "./makeHeading";

const H1 = makeHeading(1);
const H2 = makeHeading(2);
const H3 = makeHeading(3);
const H4 = makeHeading(4);
const H5 = makeHeading(5);
const H6 = makeHeading(6);

export const H = ({ type = 1, ...props }) => {
	const Component = makeHeading(type);
	return <Component {...props} />;
};

export { H1, H2, H3, H4, H5, H6 };
