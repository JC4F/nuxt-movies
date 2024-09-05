// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import tailwind from "eslint-plugin-tailwindcss";

export default withNuxt([
  ...tailwind.configs["flat/recommended"],
  {
    rules: {
      "vue/require-default-prop": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "vue/no-multiple-template-root": "off",
    },
  },
]);
// Your custom configs here
