import { defineConfig } from 'rollup';

import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

import typescript from '@rollup/plugin-typescript';

const declarationFile = 'index.d.ts';

export default defineConfig([
  {
    plugins: [typescript(), minify()],
    input: 'index.ts',
    output: {
      file: 'index.js',
      format: 'es',
    },
  },
  {
    plugins: [dts()],
    input: declarationFile,
    output: {
      file: declarationFile,
    },
  },
]);
