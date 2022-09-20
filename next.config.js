const withBundleAnalyzer = require("@next/bundle-analyzer");

const config = {
	compiler: {
		emotion: true,
	},
};

const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

module.exports = (_phase, { defaultConfig }) => {
	const plugins = [bundleAnalyzer];
	return plugins.reduce((acc, plugin) => plugin(acc), { ...config });
};
