import React from "react";
import Document, {
	Html,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
