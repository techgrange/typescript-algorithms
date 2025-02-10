import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-config-prettier";

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
    rules: {
      "no-var": "error",
    },
  },
  prettierPlugin
);
