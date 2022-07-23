module.exports = {
	"parser": "vue-eslint-parser",
	"parserOptions": {
		"parser": {
			"js": "@babel/eslint-parser",
			"<template>": "@babel/eslint-parser",
			"ts": "@typescript-eslint/parser",
		},
		"sourceType": "module",
		// "ecmaVersion": 2020,
		// "project": "./tsconfig.json",
	},
	"plugins": [
		"vue",
	],
	"extends": [
		// "eslint:recommended",
		"./base.cjs",
		"plugin:vue/vue3-recommended",
		"./vue-rules.cjs"
	],
	"rules": {
	}
	// "globals": {
	// 	"defineProps": "readonly",
	// 	"defineEmits": "readonly",
	// 	"defineExpose": "readonly",
	// 	"withDefaults": "readonly",
	// },
};
