#!/usr/bin/env node
/**
 * Main Installer for Nextify
 * Check the node version if above 8 then run the app.
 *
 * Credits:
 * Ahmad Awais - https://twitter.com/MrAhmadAwais/
 * Luan Gjokaj - https://twitter.com/luangjokaj/
 */

import prompts from "prompts";
import chalk from "chalk";
import { program } from "commander";
import { run } from "./modules/run.js";
const version = "0.0.2-4";
const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split(".");
const major = semver[0];

program
	.version(version, "-v, --vers", "output the current version")
	.parse(process.argv);

(async () => {
	const response = await prompts({
		type: "confirm",
		name: "value",
		message: `Do you want to install ${chalk.white.bgBlue(
			"⚡ Nextify",
		)} in the current directory?\n${chalk.red(process.cwd())}`,
	});

	if (response.value) {
		// If below Node 8
		if (8 > major) {
			console.error(
				chalk.red(
					"You are running Node " +
						currentNodeVersion +
						".\n" +
						"Install Nextify requires Node 8 or higher. \n" +
						"Kindly, update your version of Node.",
				),
			);
			process.exit(1);
		}

		// Makes the script crash on unhandled rejections instead of silently
		// ignoring them. In the future, promise rejections that are not handled will
		// terminate the Node.js process with a non-zero exit code
		process.on("unhandledRejection", (err) => {
			throw err;
		});

		/**
		 * Run the entire program
		 *
		 * Runs all the functions with async/await
		 */
		run();
	}
})();
