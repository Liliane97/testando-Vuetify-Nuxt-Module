// .eslintrc.js
module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    // extends: [
    //   "plugin:@typescript-eslint/recommended",
    //   "plugin:nuxt/recommended",
    //   "plugin:vue/vue3-recommended",
    //   "plugin:prettier/recommended",
    // ],
    parserOptions: {
      ecmaVersion: "latest",
      parser: "@typescript-eslint/parser",
      sourceType: "module",
    },
    // plugins: ["@typescript-eslint"],
    rules: {
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "vue/no-v-text-v-html-on-component": "off",
      "vue/multi-word-component-names": "off",
      "vue/no-v-html": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "vue/no-unused-vars": "off",
      camelcase: "off",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
  }