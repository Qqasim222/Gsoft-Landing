module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
  plugins: ["react-hooks", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",

    "comma-dangle": [
      "error",
      {
        arrays: "only-multiline",
        objects: "only-multiline",
        imports: "only-multiline",
        exports: "only-multiline",
        functions: "only-multiline",
      },
    ],
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-useless-escape": "off",
    "react/display-name": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/semi": ["error", "always"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "react-native/no-inline-styles": 0, // @TODO remove this after code cleanup with styled components
    "no-alert": "off",
    "@typescript-eslint/no-empty-function": "off",
    "react/no-unescaped-entities": "off",
  },
  settings: {
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      module: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  globals: {
    React: true,
    google: true,
    mount: true,
    NodeJS: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
  },
};
