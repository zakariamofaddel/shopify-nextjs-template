module.exports = {
  extends: ["plugin:@shopify/typescript", "plugin:@shopify/react"],
  rules: {
    "import/no-unresolved": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/object-curly-spacing": "off",
    "@babel/object-curly-spacing": "off",
    "@shopify/jsx-no-hardcoded-content": "off",
    "react/react-in-jsx-scope": "off",
    "comma-dangle": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "spaced-comment": "off",
    "lines-around-comment": "off",
    "import/order": "off",
  },
};
