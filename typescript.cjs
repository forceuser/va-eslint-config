module.exports = {
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		// "project": "./tsconfig.json",
	},
	"plugins": [
		"@typescript-eslint",
	],
	"extends": [
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"./base-rules.cjs",
		"./typescript-rules.cjs",
	],
	"rules": {
	},
};
