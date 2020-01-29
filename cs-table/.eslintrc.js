module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "tsconfig.json",
		sourceType: "module"
	},
	plugins: ["@typescript-eslint", "@typescript-eslint/tslint"],
	rules: {
		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/array-type": "error",
		"@typescript-eslint/ban-types": "error",
		"@typescript-eslint/class-name-casing": "error",
		"@typescript-eslint/consistent-type-assertions": "off",
		"@typescript-eslint/consistent-type-definitions": "error",
		"@typescript-eslint/explicit-member-accessibility": [
			"off",
			{
				accessibility: "explicit"
			}
		],
		"@typescript-eslint/indent": [
			"error",
			"tabs",
			{
				FunctionDeclaration: {
					parameters: "first"
				},
				FunctionExpression: {
					parameters: "first"
				}
			}
		],
		"@typescript-eslint/interface-name-prefix": "error",
		"@typescript-eslint/member-delimiter-style": [
			"error",
			"error",
			{
				multiline: {
					delimiter: "semi",
					requireLast: true
				},
				singleline: {
					delimiter: "semi",
					requireLast: false
				}
			}
		],
		"@typescript-eslint/member-ordering": "error",
		"@typescript-eslint/no-empty-function": "error",
		"@typescript-eslint/no-empty-interface": "error",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-misused-new": "error",
		"@typescript-eslint/no-namespace": "error",
		"@typescript-eslint/no-parameter-properties": "off",
		"@typescript-eslint/no-this-alias": "error",
		"@typescript-eslint/no-use-before-declare": "off",
		"@typescript-eslint/no-var-requires": "error",
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/prefer-function-type": "error",
		"@typescript-eslint/prefer-namespace-keyword": "error",
		"@typescript-eslint/quotes": ["error", "single"],
		"@typescript-eslint/semi": ["error", "always"],
		"@typescript-eslint/space-within-parens": ["error", "always"],
		"@typescript-eslint/triple-slash-reference": "error",
		"@typescript-eslint/type-annotation-spacing": "error",
		"@typescript-eslint/unified-signatures": "error",
		"arrow-body-style": "error",
		"arrow-parens": ["error", "as-needed"],
		camelcase: "error",
		"capitalized-comments": "error",
		"comma-dangle": "error",
		complexity: "off",
		"constructor-super": "error",
		curly: "error",
		"dot-notation": "error",
		"eol-last": "error",
		eqeqeq: ["error", "smart"],
		"guard-for-in": "error",
		"id-blacklist": ["error", "any", "Number", "number", "String", "string", "Boolean", "boolean", "Undefined", "undefined"],
		"id-match": "error",
		"import/no-extraneous-dependencies": "off",
		"import/no-internal-modules": "off",
		"import/order": "off",
		"max-classes-per-file": ["error", 1],
		"max-len": [
			"error",
			{
				code: 200
			}
		],
		"new-parens": "error",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-cond-assign": "error",
		"no-console": [
			"error",
			{
				allow: ["debug", "info", "dirxml", "warn", "dir", "time", "timeEnd", "timeLog", "trace", "assert", "clear", "count", "countReset", "group", "groupCollapsed", "groupEnd", "table", "Console", "markTimeline", "profile", "profileEnd", "timeline", "timelineEnd", "timeStamp", "context"]
			}
		],
		"no-debugger": "error",
		"no-duplicate-case": "error",
		"no-duplicate-imports": "error",
		"no-empty": "error",
		"no-eval": "error",
		"no-extra-bind": "error",
		"no-fallthrough": "off",
		"no-invalid-this": "off",
		"no-multiple-empty-lines": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-redeclare": "error",
		"no-return-await": "error",
		"no-sequences": "error",
		"no-shadow": [
			"error",
			{
				hoist: "all"
			}
		],
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-undef-init": "error",
		"no-underscore-dangle": "error",
		"no-unsafe-finally": "error",
		"no-unused-expressions": "error",
		"no-unused-labels": "error",
		"no-var": "error",
		"object-shorthand": "error",
		"one-var": ["error", "never"],
		"prefer-arrow/prefer-arrow-functions": "error",
		"prefer-const": "error",
		"prefer-object-spread": "error",
		"quote-props": ["error", "consistent-as-needed"],
		radix: "error",
		"space-before-function-paren": [
			"error",
			{
				anonymous: "never",
				asyncArrow: "always",
				constructor: "never",
				method: "never",
				named: "never"
			}
		],
		"spaced-comment": "error",
		"use-isnan": "error",
		"valid-typeof": "off",
		"@typescript-eslint/tslint/config": [
			"error",
			{
				rules: {
					"import-spacing": true,
					"jsdoc-format": [true, "check-multiline-start"],
					"jsx-boolean-value": [true, "never"],
					"jsx-curly-spacing": [true, "never"],
					"jsx-equals-spacing": [true, "never"],
					"jsx-key": true,
					"jsx-no-bind": true,
					"jsx-no-string-ref": true,
					"jsx-self-close": true,
					"no-reference-import": true,
					"one-line": [true, "check-open-brace", "check-whitespace"],
					"prefer-conditional-expression": true,
					whitespace: [true, "check-branch", "check-decl", "check-operator", "check-separator", "check-type"]
				}
			}
		]
	}
};
