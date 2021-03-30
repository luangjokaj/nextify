import { Global, css } from "@emotion/react";
import { Breakpoints, mq } from "./mq";
import { theme } from "./theme";

const globalStyles = (
	<Global
		styles={css`
			@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap");

			html,
			body {
				margin: 0;
				padding: 0;
				min-height: 100%;
				overflow-x: hidden;
			}

			body {
				font-size-adjust: none;
				-moz-osx-font-smoothing: grayscale;
				-webkit-text-size-adjust: none;
				-webkit-font-smoothing: antialiased;
				font-family: ${theme.fonts.text};
				font-size: ${theme.sizes.text.size.mobile};
				line-height: ${theme.sizes.text.lineheight.mobile};
				padding-top: ${theme.spacing.paddingTopBody.mobile};
				color: ${theme.colors.dark};
				margin: 0;

				${mq(Breakpoints.lg)} {
					font-size: ${theme.sizes.text.size.desktop};
					line-height: ${theme.sizes.text.lineheight.desktop};
					padding-top: ${theme.spacing.paddingTopBody.desktop};
				}
			}

			* {
				box-sizing: border-box;

				&:before,
				&:after {
					box-sizing: border-box;
				}

				&::selection {
					background: ${theme.colors.dark};
					color: ${theme.colors.light};
				}
			}

			main {
				display: block;
			}

			h1 {
				font-size: 2em;
				margin: 0.67em 0;
			}

			hr {
				background: none;
				border: none;
				border-bottom: solid 1px ${theme.colors.grayLight};
				box-sizing: content-box;
				height: 0;
				overflow: visible;
			}

			pre {
				font-family: monospace, monospace;
				font-size: 1em;
			}

			abbr[title] {
				border-bottom: none;
				text-decoration: underline;
				text-decoration: underline dotted;
			}

			b,
			strong {
				font-weight: bolder;
			}

			code,
			kbd,
			samp {
				font-family: monospace, monospace;
				font-size: 1em;
			}

			small {
				font-size: ${theme.sizes.small.size.mobile};
				line-height: ${theme.sizes.small.lineheight.mobile};

				${mq(Breakpoints.lg)} {
					font-size: ${theme.sizes.small.size.desktop};
					line-height: ${theme.sizes.small.lineheight.desktop};
				}
			}

			sub,
			sup {
				font-size: 75%;
				line-height: 0;
				position: relative;
				vertical-align: baseline;
			}

			sub {
				bottom: -0.25em;
			}

			sup {
				top: -0.5em;
			}

			img {
				border-style: none;
			}

			button,
			input,
			optgroup,
			select,
			textarea {
				font-family: inherit;
				font-size: 100%;
				line-height: 1.15;
				margin: 0;
			}
			button,
			input {
				overflow: visible;
			}

			button,
			select {
				text-transform: none;
			}

			button,
			[type="button"],
			[type="reset"],
			[type="submit"] {
				-webkit-appearance: button;
			}

			button::-moz-focus-inner,
			[type="button"]::-moz-focus-inner,
			[type="reset"]::-moz-focus-inner,
			[type="submit"]::-moz-focus-inner {
				border-style: none;
				padding: 0;
			}

			button:-moz-focusring,
			[type="button"]:-moz-focusring,
			[type="reset"]:-moz-focusring,
			[type="submit"]:-moz-focusring {
				outline: 1px dotted ButtonText;
			}

			fieldset {
				padding: 0.35em 0.75em 0.625em;
			}

			legend {
				color: inherit;
				display: table;
				max-width: 100%;
				padding: 0;
				white-space: normal;
			}

			progress {
				vertical-align: baseline;
			}

			textarea {
				overflow: auto;
			}

			[type="checkbox"],
			[type="radio"] {
				padding: 0;
			}

			[type="number"]::-webkit-inner-spin-button,
			[type="number"]::-webkit-outer-spin-button {
				height: auto;
			}

			[type="search"] {
				-webkit-appearance: textfield;
				outline-offset: -2px;
			}

			[type="search"]::-webkit-search-decoration {
				-webkit-appearance: none;
			}

			::-webkit-file-upload-button {
				-webkit-appearance: button;
				font: inherit;
			}

			details {
				display: block;
			}

			summary {
				display: list-item;
			}

			template {
				display: none;
			}

			[hidden] {
				display: none;
			}

			a,
			button {
				cursor: pointer;
				outline: none;
				text-decoration: none;
				transition: all 0.3s ease;
			}

			a {
				background-color: transparent;
				color: ${theme.colors.primary};

				@media (hover: hover) {
					&:hover {
						color: ${theme.colors.primaryDark};
					}
				}
			}

			figure {
				margin: 0;
			}

			fieldset {
				appearance: none;
				border: none;
			}

			img,
			svg {
				transition: all 0.3s ease;

				& * {
					transition: all 0.3s ease;
				}
			}

			img {
				display: inline-block;
				max-width: 100%;
				width: auto;
				height: auto;
			}

			strong,
			b {
				font-weight: 700;
				color: ${theme.colors.dark};
			}
		`}
	/>
);

export { globalStyles };
