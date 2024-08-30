import { defineConfig } from 'rollup';

import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

import typescript from '@rollup/plugin-typescript';

const sourceFolder = 'src';

const fileFormat = 'es';
const entryFileName = 'app';
const outputFileName = 'index';

const declarationFile = `${outputFileName}.d.ts`;
const entryFile = `${entryFileName}.ts`;
const outputFile = `${outputFileName}.js`;

export default defineConfig([
  {
    external: ['@archoleat/notifier', '@archoleat/reglib', 'node:path'],
    plugins: [typescript(), minify()],
    input: `${sourceFolder}/${entryFile}`,
    output: {
      file: outputFile,
      format: fileFormat,
    },
  },
  {
    plugins: [dts()],
    input: `${sourceFolder}/${entryFile}`,
    output: {
      file: declarationFile,
      format: fileFormat,
    },
  },
]);
