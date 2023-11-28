require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:json/recommended",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/valid-v-for": "off",
    "linebreak-style": 0,
    "antfu/if-newline": "off",
    "vue/v-on-event-hyphenation": "off",
    "no-console": "off",
    "vue/no-setup-props-destructure": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  globals: {
    queryContent: "readonly",
    fetchContentNavigation: "readonly",
    authenticate: "readonly",
    navigationItem: "readonly",
    useColorMode: "readonly",
    availableBadges: "readonly",
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  env: {
    node: true,
  },
};
