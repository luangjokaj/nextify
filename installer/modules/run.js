/**
 * Installation
 */

import fs from "fs";
import ora from "ora";
import execa from "execa";
import chalk from "chalk";
import download from "download";
import { createRequire } from "module";
import { handleError } from "./handleError.js";
import { clearConsole } from "./clearConsole.js";
import { printNextSteps } from "./printNextSteps.js";

const require = createRequire(import.meta.url);
const packageData = require("../package.json");

const version = packageData.version;

const theCWD = process.cwd();
const theCWDArray = theCWD.split("/");
const theDir = theCWDArray[theCWDArray.length - 1];

const run = () => {
	// Init
	clearConsole();

	let upstreamUrl = `https://raw.githubusercontent.com/luangjokaj/nextify/v${version}`;

	// Files
	const filesToDownload = [
		`${upstreamUrl}/.babelrc`,
		`${upstreamUrl}/.editorconfig`,
		`${upstreamUrl}/.eslintrc`,
		`${upstreamUrl}/.gitignore`,
		`${upstreamUrl}/.prettierrc`,
		`${upstreamUrl}/LICENSE`,
		`${upstreamUrl}/next.config.js`,
		`${upstreamUrl}/now.json`,
		`${upstreamUrl}/installer/package.json`,
		`${upstreamUrl}/README.md`,
		`${upstreamUrl}/tsconfig.json`,

		`${upstreamUrl}/public/robots.txt`,
		`${upstreamUrl}/public/site.webmanifest`,

		`${upstreamUrl}/src/assets/styles/globalStyles.tsx`,
		`${upstreamUrl}/src/assets/styles/mq.ts`,
		`${upstreamUrl}/src/assets/styles/theme.ts`,

		`${upstreamUrl}/src/assets/svg/Logo.tsx`,

		`${upstreamUrl}/src/components/Page/index.ts`,
		`${upstreamUrl}/src/components/Page/Page.tsx`,

		`${upstreamUrl}/src/pages/_app.tsx`,
		`${upstreamUrl}/src/pages/_document.tsx`,
		`${upstreamUrl}/src/pages/index.tsx`,
	];

	// Organise file structure
	const dotFiles = [
		".babelrc",
		".editorconfig",
		".eslintrc",
		".gitignore",
		".prettierrc",
	];
	const publicFiles = ["robots.txt", "site.webmanifest"];
	const stylesFiles = ["globalStyles.tsx", "mq.ts", "theme.ts"];
	const svgFiles = ["Logo.tsx"];
	const componentsFiles = ["index.ts", "Page.tsx"];
	const pagesFiles = ["_app.tsx", "_document.tsx", "index.tsx"];

	// Start
	console.log("\n");
	console.log(
		"📦 ",
		chalk.black.bgYellow(
			` Downloading ⚡ Nextify files in: → ${chalk.bgGreen(
				` ${theDir} `,
			)}\n`,
		),
		chalk.dim(`\n In the directory: ${theCWD}\n`),
		chalk.dim("This might take a couple of minutes.\n"),
	);

	const spinner = ora({ text: "" });
	spinner.start(
		`1. Creating ⚡ Nextify files inside → ${chalk.black.bgWhite(
			` ${theDir} `,
		)}`,
	);

	// Download
	Promise.all(filesToDownload.map((x) => download(x, `${theCWD}`))).then(
		async () => {
			if (!fs.existsSync("src")) {
				await execa("mkdir", [
					"public",
					"src",
					"src/assets",
					"src/assets/styles",
					"src/assets/svg",
					"src/components",
					"src/components/Page",
					"src/pages",
				]);
			}

			dotFiles.map((x) =>
				fs.rename(`${theCWD}/${x.slice(1)}`, `${theCWD}/${x}`, (err) =>
					handleError(err),
				),
			);
			publicFiles.map((x) =>
				fs.rename(`${theCWD}/${x}`, `${theCWD}/public/${x}`, (err) =>
					handleError(err),
				),
			);
			stylesFiles.map((x) =>
				fs.rename(
					`${theCWD}/${x}`,
					`${theCWD}/src/assets/styles/${x}`,
					(err) => handleError(err),
				),
			);
			svgFiles.map((x) =>
				fs.rename(
					`${theCWD}/${x}`,
					`${theCWD}/src/assets/svg/${x}`,
					(err) => handleError(err),
				),
			);
			componentsFiles.map((x) =>
				fs.rename(
					`${theCWD}/${x}`,
					`${theCWD}/src/components/Page/${x}`,
					(err) => handleError(err),
				),
			);
			pagesFiles.map((x) =>
				fs.rename(`${theCWD}/${x}`, `${theCWD}/src/pages/${x}`, (err) =>
					handleError(err),
				),
			);
			spinner.succeed();

			// The npm install
			spinner.start("2. Installing npm packages...");
			await execa("npm", ["install"]);
			spinner.succeed();

			// Done
			printNextSteps();
		},
	);
};

export { run };
