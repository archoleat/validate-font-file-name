export default {
  '**/*.md': 'remark --quiet --frail',
  '**/*': 'prettier --write',
  'src/index.ts': 'eslint --fix',
};
