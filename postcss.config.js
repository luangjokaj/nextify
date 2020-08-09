module.exports = {
	plugins: {
		"postcss-flexbugs-fixes": {},
		"postcss-import": {},
		"postcss-for": {},
		"postcss-mixins": {},
		"postcss-calc": {},
		"postcss-preset-env": {
			stage: 0,
			features: {
				"nesting-rules": true,
				"color-mod-function": true,
				"custom-media": true,
			},
		},
	},
};
