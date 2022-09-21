module.exports = {
	"parser": "vue-eslint-parser",
	"parserOptions": {
		"parser": "@typescript-eslint/parser",
		"ecmaVersion": 13,
		"sourceType": "module",
		"project": "./tsconfig.json",
		"extraFileExtensions": [".vue"],
	},
	"plugins": [
		"vue",
		"@typescript-eslint",
		"unicorn",
	],
	"extends": [
		"plugin:vue/vue3-recommended",
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"./vue-rules.cjs",
		"./base-rules.cjs",
		"./typescript-rules.cjs",
		"./unicorn-rules.cjs",
	],
	"rules": {
	},
};
