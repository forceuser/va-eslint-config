module.exports = {
	"parser": "vue-eslint-parser",
	"parserOptions": {
		"parser": {
			"js": "@babel/eslint-parser",
			"<template>": "@babel/eslint-parser",
			"ts": "@typescript-eslint/parser",
		},
		"sourceType": "module",
	},
	"plugins": [
		"vue",
	],
	"extends": [
		"plugin:vue/vue3-recommended",
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
