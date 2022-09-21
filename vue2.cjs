module.exports = {
	"parser": "vue-eslint-parser",
	"parserOptions": {
		"parser": {
			"js": "@babel/eslint-parser",
			"<template>": "@babel/eslint-parser",
			"ts": "@typescript-eslint/parser",
		},
		"ecmaVersion": 13,
		"sourceType": "module",
	},
	"plugins": [
		"vue",
		"unicorn",
	],
	"extends": [
		"plugin:vue/recommended",
		"eslint:recommended",
		"./vue-rules.cjs",
		"./base-rules.cjs",
		"./unicorn-rules.cjs",
	],
	"rules": {
	},
};
