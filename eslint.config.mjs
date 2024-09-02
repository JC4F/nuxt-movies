// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import tailwind from "eslint-plugin-tailwindcss";

export default withNuxt([...tailwind.configs["flat/recommended"], {
  rules: {
    "vue/require-default-prop": "off",
    "@typescript-eslint/no-explicit-any": "off"
  }
}]);
// Your custom configs here
