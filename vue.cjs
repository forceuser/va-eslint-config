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
		"./base.cjs",
		"./typescript.cjs",
		"./vue-rules.cjs",
	],
	"rules": {
	},
};
