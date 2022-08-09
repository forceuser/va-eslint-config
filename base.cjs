module.exports = {
	"parser": "@babel/eslint-parser",
	"parserOptions": {
		"ecmaVersion": 13,
		"sourceType": "module",
		"requireConfigFile": false,
	},
	"extends": [
		"eslint:recommended",
		"./base-rules.cjs",
		"./unicorn-rules.cjs",
	],
	"env": {
		"browser": true,
		"commonjs": true,
		"es2022": true,
	},
	"settings": {
	},
	"plugins": [
		"unicorn"
	],
	"globals": {
		"globalThis": "readonly",
	},
};
