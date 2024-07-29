import { defineConfig } from 'rollup';

import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';

const indexFile = 'src/index.ts';

export default defineConfig([
  {
    plugins: [typescript(), minify()],
    input: indexFile,
    output: {
      file: 'index.js',
      format: 'es',
    },
  },
  {
    plugins: [
      alias({
        entries: [
          {
            find: '#types',
            replacement: 'src/types',
          },
        ],
      }),
      dts(),
    ],
    input: indexFile,
    output: {
      file: 'index.d.ts',
    },
  },
]);
