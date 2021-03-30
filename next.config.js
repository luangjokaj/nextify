const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer");

const config = {
	future: {
		webpack5: true,
	},
};

const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins([[bundleAnalyzer, config]]);
