import { defineConfig } from 'rollup';

import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';

const fileName = 'index';
const indexFile = 'src/index.ts';
const types = 'src/types';

export default defineConfig([
  {
    plugins: [typescript(), minify()],
    input: indexFile,
    output: {
      file: `${fileName}.js`,
      format: 'es',
    },
  },
  {
    plugins: [
      alias({
        entries: [
          {
            find: '#types',
            replacement: `${types}/index.ts`,
          },
        ],
      }),
      dts(),
    ],
    input: indexFile,
    output: {
      file: `${fileName}.d.ts`,
    },
  },
]);
