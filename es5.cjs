module.exports = {
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
