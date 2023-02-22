module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  plugins: ['jest'],
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    spyOn: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {},
};
