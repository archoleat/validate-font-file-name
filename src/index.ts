import { parse } from 'node:path';

import chalk from 'chalk';

import type { Parameters } from '#types';

/**
 * The asynchronous function `validateFontFileName` validates
 * if a given font file name matches a specific regex.
 *
 * @param {string} file - The `file` parameter in the `validateFontFileName`
 * function is a string that represents the file name of a font file that
 * you want to validate.
 *
 * @param {string | RegExp} regex - The `regex` parameter in the
 * `validateFontFileName` function is used to provide a custom regular
 * expression for validating the font file name. If a custom
 * regex is not provided, the function uses a default regex
 * to validate the font file name.
 *
 * @returns The function `validateFontFileName` is returning a boolean value.
 * It returns `true` if the file name matches the specified regex,
 * and `false` if it does not match.
 */

const validateFontFileName = async (parameters: Parameters) => {
  const { file, regex = '', example = {} } = parameters;
  const {
    fontFamily = 'FontFamily',
    fontWeight = 'FontWeight',
    extension = 'otf|ttf|woff|woff2',
  } = example;
  const LETTERS_REGEX = '[A-Z][a-z]';
  const FONT_FAMILY_REGEX = `^${LETTERS_REGEX}+(${LETTERS_REGEX}+)?`;
  const FONT_WEIGHT_REGEX = [
    'Thin',
    'Hairline',
    'ExtraLight',
    'UltraLight',
    'Light',
    'Regular',
    'Medium',
    'SemiBold',
    'DemiBold',
    'Bold',
    'ExtraBold',
    'UltraBold',
    'Black',
    'Heavy',
    'ExtraBlack',
    'UltraBlack',
  ].join('|');
  const FONT_EXTENSION_REGEX = ['otf', 'ttf', 'woff', 'woff2'].join('|');
  const FAMILY_REGEX = `(${FONT_FAMILY_REGEX})`;
  const WEIGHT_REGEX = `(${FONT_WEIGHT_REGEX})`;
  const EXTENSION_REGEX = `(${FONT_EXTENSION_REGEX})$`;
  const DEFAULT_FONT_FILE_NAME_REGEX = new RegExp(
    `${FAMILY_REGEX}-${WEIGHT_REGEX}\\.${EXTENSION_REGEX}`,
  );
  const fileName = parse(file).base;
  const typeOfRegex = typeof regex === 'string' && regex !== '';
  const selectRegex = typeOfRegex
    ? new RegExp(regex)
    : regex || DEFAULT_FONT_FILE_NAME_REGEX;
  const match = selectRegex.test(fileName);
  const regexExample = `${fontFamily}-${fontWeight}.${extension}`;

  if (!match) {
    console.error(
      chalk.red.bold(`'${fileName}' doesn't match with '${regexExample}'.`),
    );

    return false;
  }

  return true;
};

export { validateFontFileName };
