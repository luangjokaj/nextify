import React from "react";
import Head from "next/head";

export const appleTouchIcon =
	"https://nextify.s3-eu-west-1.amazonaws.com/img/meta/180.png";
export const favIcon32 =
	"https://nextify.s3-eu-west-1.amazonaws.com/img/meta/32.png";
export const favIcon16 =
	"https://nextify.s3-eu-west-1.amazonaws.com/img/meta/16.png";
export const favIcon =
	"https://nextify.s3-eu-west-1.amazonaws.com/img/meta/favicon.ico";
export const safariPinnedTab =
	"https://nextify.s3-eu-west-1.amazonaws.com/img/meta/512.svg";
export const preview =
	"https://nextify.s3-eu-west-1.amazonaws.com/img/meta/preview.jpg";

const Page = ({
	title = "Nextify",
	description = "React apps using Next.js and Emotion.",
	image = preview,
	children,
}) => (
	<React.Fragment>
		<Head>
			<meta httpEquiv="" content="IE=edge" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, maximum-scale=1"
			/>
			<meta name="description" content={description} />
			<link rel="manifest" href="/site.webmanifest" />
			<meta name="theme-color" content="#0370F3" />
			<meta property="og:title" content={title + " - Nextify"} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:title" content={title + " - Nextify"} />
			<meta name="twitter:image" content={image} />
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href={appleTouchIcon}
			/>
			<link rel="mask-icon" href={safariPinnedTab} color="#0370F3" />
			<link rel="icon" type="image/png" sizes="32x32" href={favIcon32} />
			<link rel="icon" type="image/png" sizes="16x16" href={favIcon16} />
			<link rel="shortcut icon" href={favIcon} />
			<title>{title + " - Nextify"}</title>
		</Head>
		{children}
	</React.Fragment>
);

export { Page };
