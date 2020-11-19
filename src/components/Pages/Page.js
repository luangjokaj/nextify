import React from "react";
import Head from "next/head";
import { withRouter } from "next/router";

export const favicon = "https://via.placeholder.com/32x32";
export const icon120 = "https://via.placeholder.com/120x120";
export const icon152 = "https://via.placeholder.com/152x152";
export const icon180 = "https://via.placeholder.com/180x180";
export const icon192 = "https://via.placeholder.com/192x192";
export const icon512 = "https://via.placeholder.com/512x512";
export const preview = "https://via.placeholder.com/1280x670";

const Page = ({
	title = "Nextify",
	description,
	image = preview,
	children,
	router,
}) => (
	<React.Fragment>
		<Head>
			<meta httpEquiv="" content="IE=edge" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, maximum-scale=1"
			/>
			<meta name="description" content={description} />
			<meta property="og:title" content={title + " - Nextify"} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:title" content={title + " - Nextify"} />
			<meta name="twitter:image" content={image} />
			<link rel="manifest" href="/manifest.json" />
			<link rel="shortcut icon" href={favicon} type="image/x-icon" />
			<link rel="apple-touch-icon" sizes="120x120" href={icon120} />
			<link rel="apple-touch-icon" sizes="152x152" href={icon152} />
			<link rel="apple-touch-icon" sizes="180x180" href={icon180} />
			<link rel="apple-touch-icon" sizes="192x192" href={icon192} />
			<link rel="apple-touch-icon" sizes="512x512" href={icon512} />
			<link rel="apple-touch-icon-precomposed" href={icon192} />
			<link rel="icon" sizes="120x120" href={icon120} />
			<link rel="icon" sizes="152x152" href={icon152} />
			<link rel="icon" sizes="180x180" href={icon180} />
			<link rel="icon" sizes="192x192" href={icon192} />
			<link rel="icon" sizes="512x512" href={icon512} />

			<title>{title + " - Nextify"}</title>
		</Head>
		{children}
	</React.Fragment>
);

const PageWithRouter = withRouter(Page);

export { PageWithRouter as Page };
