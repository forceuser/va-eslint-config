module.exports = {
	"overrides": [
		{
			"files": ["**/*.js", "**/*.mjs", "**/*.cjs"],
			"extends": [
				"./base.cjs",
			],
		},
		{
			"files": ["**/*.ts", "**/*.tsx"],
			"extends": [
				"./typescript.cjs",
			],
		},
		{
			"files": ["**/*.vue"],
			"extends": [
				"./vue.cjs",
			],
		},
		{
			"files": ["**/*.es5.js"],
			"extends": [
				"./es5.cjs",
			],
		},
	],
};
