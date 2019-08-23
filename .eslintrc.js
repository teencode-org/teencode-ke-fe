module.exports = {
  root: true,
  env: {
    jest: true,
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "@vue/airbnb"
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-named-as-default': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
