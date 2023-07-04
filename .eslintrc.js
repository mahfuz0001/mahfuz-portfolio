module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  extends: ["next", "next/core-web-vitals", "prettier"],
  rules: {
    "no-unused-vars": "off",
    "no-console": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/no-unescaped-entities": "off",

    "react/display-name": "off",
    "react/jsx-curly-brace-presence": [
      "warn",
      { props: "never", children: "never" },
    ],
  },
  globals: {
    React: true,
    JSX: true,
  },
};
