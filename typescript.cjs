module.exports = {
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"project": "./tsconfig.json",
	},
	"plugins": [
		"@typescript-eslint",
	],
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"./base-rules.cjs",
		"./typescript-rules.cjs",
		"./unicorn.cjs",
	],
	"rules": {
	},
};
