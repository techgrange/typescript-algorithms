import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-config-prettier";
import pluginJest from "eslint-plugin-jest";

export default tseslint.config(
  {
    files: ["src/**/*.{js,mjs,cjs,ts}"],
  },
  {
    ignores: ["**/*.{mjs,cjs,d.ts,d.mts}", "**/dist/**", "**/node_modules/**", "docs/**"],
  },
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
  {
    // eslint-plugin-js
    rules: {
      "array-callback-return": "error",
      "no-duplicate-imports": "error",
      "no-var": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      curly: "error",
      "default-case": "off",
      "default-case-last": "error",
      "dot-notation": "error",
      "no-alert": "error",
      "no-console": "warn",
      "no-else-return": "error",
      "no-eval": "warn",
      "no-lonely-if": "error",
      "no-multi-assign": "error",
      "no-multi-str": "error",
      "no-param-reassign": "error",
      "no-return-assign": "error",
      "no-script-url": "error",
      "no-sequences": "error",
      "no-throw-literal": "error",
      "no-unneeded-ternary": "error",
      "no-useless-call": "error",
      "no-useless-constructor": "error",
      "no-useless-return": "error",
      "object-shorthand": "error",
      "operator-assignment": ["error", "always"],
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-exponentiation-operator": "error",
      "prefer-object-has-own": "error",
      "prefer-promise-reject-errors": "error",
      "prefer-object-spread": "error",
      "prefer-template": "error",
      yoda: "error",
      radix: "error",
      eqeqeq: ["error", "smart"],
      "no-undef": "off",
    },
  },
  {
    // typescript-eslint
    rules: {
      "no-unused-vars": "error",
      "tseslint/no-explicit-any": "off",
      "tseslint/ban-ts-comment": "off",
      "tseslint/no-unused-expressions": "off",
      "tseslint/lines-between-class-members": "off",
      "tseslint/indent": "off",
      "tseslint/naming-convention": "off",
      "tseslint/comma-dangle": "off",
      "tseslint/no-redeclare": "off",
      "tseslint/no-use-before-define": "off",
      "tseslint/no-loop-func": "off",
      "tseslint/no-empty-object-type": "off",
    },
  },
  {
    plugins: {
      pluginJest,
    },
    files: ["**/*.test.{ts,tsx}"],
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      "jest/no-export": "off",
      "jest/expect-expect": "off",
      "jest/valid-title": "off",
    },
  },
  prettierPlugin
);
