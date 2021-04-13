import { Global, css } from "@emotion/react";
import { Breakpoints, mq } from "./mq";

const globalStyles = (
	<Global
		styles={(theme: any) => css`
			html,
			body {
				margin: 0;
				padding: 0;
				min-height: 100%;
				scroll-behavior: smooth;
			}

			body {
				-moz-osx-font-smoothing: grayscale;
				-webkit-text-size-adjust: 100%;
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
					background: ${theme.colors.primary};
					color: ${theme.colors.light};
				}
			}

			main {
				display: block;
			}

			hr {
				background: none;
				border: none;
				border-bottom: solid 1px ${theme.colors.grayLight};
				box-sizing: content-box;
				height: 0;
				overflow: visible;
				margin: 10px 0;
			}

			pre,
			code,
			kbd,
			samp {
				font-family: monospace, monospace;
			}

			pre {
				border-radius: 12px;
			}

			small {
				font-size: ${theme.sizes.small.size.mobile};
				line-height: ${theme.sizes.small.lineheight.mobile};

				${mq(Breakpoints.lg)} {
					font-size: ${theme.sizes.small.size.desktop};
					line-height: ${theme.sizes.small.lineheight.desktop};
				}
			}

			blockquote {
				margin: 10px 0;
				padding: 0;
				font-size: ${theme.sizes.blockquote.size.mobile};
				line-height: ${theme.sizes.blockquote.lineheight.mobile};

				${mq(Breakpoints.lg)} {
					font-size: ${theme.sizes.blockquote.size.desktop};
					line-height: ${theme.sizes.blockquote.lineheight.desktop};
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

			a,
			button {
				cursor: pointer;
				outline: none;
				text-decoration: none;
				transition: all 0.3s ease;
			}

			a {
				background-color: transparent;
				color: ${theme.colors.grayDark};

				@media (hover: hover) {
					&:hover {
						color: ${theme.colors.primary};
					}
				}
			}

			p {
				margin: 10px 0;

				& a {
					color: ${theme.colors.primary};

					@media (hover: hover) {
						&:hover {
							color: ${theme.colors.primaryDark};
						}
					}
				}
			}

			blockquote,
			p,
			ol,
			ul {
				color: ${theme.colors.gray};
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
				border-style: none;
				object-fit: contain;
			}

			strong,
			b {
				font-weight: 700;
				color: ${theme.colors.dark};
			}

			table {
				width: 100%;
				border-collapse: collapse;

				& th,
				& td {
					text-align: left;
					border-bottom: solid 1px ${theme.colors.grayLight};
					padding: 5px 20px 5px 0;
					white-space: nowrap;
				}

				& th {
					font-size: ${theme.sizes.button.size.mobile};

					${mq(Breakpoints.lg)} {
						font-size: ${theme.sizes.button.size.desktop};
					}
				}

				& td {
					font-size: ${theme.sizes.text.size.mobile};
					color: ${theme.colors.gray};

					${mq(Breakpoints.lg)} {
						font-size: ${theme.sizes.text.size.desktop};
					}

					&:first-of-type {
						font-weight: 600;
						color: ${theme.colors.dark};
					}
				}
			}
		`}
	/>
);

export { globalStyles };
