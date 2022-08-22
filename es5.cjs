module.exports = {
	"parser": "@babel/eslint-parser",
	"parserOptions": {
		"ecmaVersion": 13,
		"sourceType": "module",
		"requireConfigFile": false,
	},
	"env": {
		"browser": true,
		"commonjs": false,
		"es6": false,
	},
	"plugins": [
		"es",
	],
	"extends": [
		"plugin:es/restrict-to-es5",
		"./es5-rules.cjs",
	],
};
