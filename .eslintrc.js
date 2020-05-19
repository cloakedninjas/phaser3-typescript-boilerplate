module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'ignorePatterns': ['dist'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'never']
  }
};
