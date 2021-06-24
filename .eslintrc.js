module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'error' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'error' ? 'warn' : 'off',
    'import/prefer-default-export': 'off',
    camelcase: 'warn',
    'vue/no-unused-components': 'warn',
    'import/no-unresolved': 'off',
    'no-undef': 'off',
    'import/no-extraneous-dependencies': 'off',
    'max-len': 'off',
    'vue/max-len': ['error', {
      code: 100,
      template: 200,
      tabWidth: 2,
      comments: 100,
      ignorePattern: '',
      ignoreComments: false,
      ignoreTrailingComments: false,
      ignoreUrls: false,
      ignoreStrings: false,
      ignoreTemplateLiterals: false,
      ignoreRegExpLiterals: false,
      ignoreHTMLAttributeValues: false,
      ignoreHTMLTextContents: false,
    }],
  },
};

/*
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
 */
