module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'mocha': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 2021,
  },
  'rules': {
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'quotes': [2, 'single'],
    'semi': 2
  }
};
