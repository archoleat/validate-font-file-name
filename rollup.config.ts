import { resolve } from 'node:path';

import { defineConfig } from 'rollup';

import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';

const sourceFolder = 'src';
const types = `${sourceFolder}/types`;

const fileName = 'index';
const fileFormat = 'es';

const indexFile = `${fileName}.ts`;
const declarationFile = `${fileName}.d.ts`;
const outputFile = `${fileName}.js`;

export default defineConfig([
  {
    external: ['@archoleat/notifier', '@archoleat/reglib', 'node:path'],
    plugins: [typescript(), minify()],
    input: `${sourceFolder}/${indexFile}`,
    output: {
      file: outputFile,
      format: fileFormat,
    },
  },
  {
    plugins: [
      alias({
        entries: [
          {
            find: '#types',
            replacement: resolve(`${types}/${declarationFile}`),
          },
        ],
      }),
      dts(),
    ],
    input: `${sourceFolder}/${indexFile}`,
    output: {
      file: declarationFile,
      format: fileFormat,
    },
  },
]);
