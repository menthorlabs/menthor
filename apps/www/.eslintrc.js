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
  },
  globals: {
    defineNuxtConfig: true,
    defineNuxtPlugin: true,
    useFetch: true,
    ref: true,
    useSchemaOrg: true,
    defineWebSite: true,
    defineWebPage: true,
    defineOrganization: true,
    useSeoMeta: true,
    useRoute: true,
    useHead: true,
    definePageMeta: true,
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
