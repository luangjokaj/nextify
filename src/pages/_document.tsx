import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

function Document() {
	return (
		<Html>
			<Head>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					rel="preload"
					as="style"
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
					media="all"
				/>
				<noscript>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
					/>
				</noscript>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

export default Document;
