module.exports = {
	"rules": {
		// BASIC
		"require-atomic-updates": ["warn"],
		"require-yield": ["off"],
		"no-this-before-super": ["error"],
		// STYLE
		"indent": ["error", "tab", {"SwitchCase": 1, "ignoredNodes": ["TemplateLiteral *"]}],
		"eol-last": ["error"],
		// "linebreak-style": ["error", "unix"],

		"quotes": ["error", "double", {"allowTemplateLiterals": true}],
		"semi": ["error", "always"],
		"curly": ["error", "all"],
		"dot-notation": ["error"],
		"arrow-parens": ["off"],
		// "new-cap": "error",
		"one-var": ["error", "never"],

		// spacing
		"func-call-spacing": ["error", "never"],
		"generator-star-spacing": ["off"],
		"object-curly-spacing": ["error", "never"],
		"array-bracket-spacing": ["error", "never"],
		"computed-property-spacing": ["error", "never"],
		"key-spacing": ["error", {"beforeColon": false, "afterColon": true, "mode": "strict"}],
		"comma-spacing": ["error", {"before": false, "after": true}],
		"comma-dangle": ["error", {
			"arrays": "always-multiline",
			"objects": "always-multiline",
			"imports": "always-multiline",
			"exports": "never",
			"functions": "ignore",
		}],
		"space-infix-ops": ["error"],
		"space-in-parens": ["error", "never"],
		"space-before-blocks": ["error", "always"],
		"space-before-function-paren": ["error", "always"],
		"space-unary-ops": ["error", {
			"words": true,
			"nonwords": false,
		}],
		"spaced-comment": ["error", "always"],
		"keyword-spacing": ["error", {"before": true, "after": true}],
		"arrow-spacing": ["error", {"before": true, "after": true}],
		// ======================================================================
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		"no-control-regex": ["warn"],
		"no-useless-rename": ["error", {
			"ignoreDestructuring": false,
			"ignoreImport": false,
			"ignoreExport": false,
		}],
		"no-trailing-spaces": ["error"],
		// "no-underscore-dangle": "error",
		"no-empty": ["error",
			{"allowEmptyCatch": true},
		],
		"no-multi-spaces": ["error"],
		"no-dupe-keys": ["error"],
		"no-duplicate-case": ["error"],
		"no-dupe-args": ["error"],
		"no-sparse-arrays": ["error"],
		"no-extra-semi": ["error"],
		"no-func-assign": ["error"],
		"no-unused-vars": ["warn"],
		"no-inner-declarations": ["error"],
		"no-console": ["off"],
		"no-var": ["warn"],
		"no-self-assign": ["error"],
		"no-self-compare": ["error"],
		"no-cond-assign": ["warn"],
		"no-useless-concat": ["error"],
		"no-useless-escape": ["off"],
		// "no-use-before-define": "error",
		"no-implicit-coercion": ["off"],
		"no-new-func": ["off"],
		"no-new-wrappers": ["error"],
		// "func-names": ["error", "always"],

		"brace-style": ["warn", "stroustrup", {"allowSingleLine": true}],
		"wrap-iife": ["error", "inside"],
		"yoda": ["error", "never"],
		"prefer-const": ["off"],
		"prefer-template": ["off"],
		"prefer-arrow-callback": ["warn", {"allowNamedFunctions": true}],

		// ======================================================================
		"object-shorthand": ["warn"],
	},
};
