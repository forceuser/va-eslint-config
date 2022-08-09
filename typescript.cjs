module.exports = {
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"project": "./tsconfig.json",
		"extraFileExtensions": ['.vue'],
	},
	"plugins": [
		"@typescript-eslint",
		"unicorn",
	],
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"./base-rules.cjs",
		"./typescript-rules.cjs",
		"./unicorn-rules.cjs",
	],
	"rules": {
	},
};
