const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withBundleAnalyzer = require("@next/bundle-analyzer");

const cssPlugin = withCSS({
	cssModules: true,
});

const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins([[bundleAnalyzer, cssPlugin]]);
