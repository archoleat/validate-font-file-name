import type { UserConfig } from '@commitlint/types';

const commitLintConfig: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'spec',
        'style',
      ],
    ],
  },
};

export default commitLintConfig;
