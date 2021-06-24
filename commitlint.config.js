const typeEnum = ['codestyle'];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', typeEnum],
    'header-max-length': [2, 'always', 160],
  },
};
