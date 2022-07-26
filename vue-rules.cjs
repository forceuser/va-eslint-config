module.exports = {
	"rules": {
		"no-unused-vars": ["off"],
		"no-undef": ["off"],
		"vue/no-unused-vars": ["warn"],
		"vue/attribute-hyphenation": ["off"],
		"vue/multi-word-component-names": ["off"],
		"vue/v-on-event-hyphenation": ["off"],
		"vue/html-indent": ["error", "tab"],
		"vue/html-quotes": ["warn", "double", {"avoidEscape": true}],
		"vue/html-self-closing": ["error", {
			"html": {
				"void": "always",
				"normal": "always",
				"component": "always",
			},
			"svg": "always",
			"math": "always",
		}],
		"vue/component-tags-order": ["error", {
			"order": ["template", "i18n", "script:not([setup])", "script[setup]", "style"],
		}],
		"vue/define-macros-order": ["error", {
			"order": ["defineEmits", "defineProps"],
		}],
	},
};
