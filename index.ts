import { parse } from 'node:path';

import chalk from 'chalk';

/**
 * The function `validateFontFileName` in TypeScript validates
 * if a given font file name matches a specific pattern.
 *
 * @param {string} file - The `file` parameter in the `validateFontFileName`
 * function is a string that represents the file name of a font file that
 * you want to validate.
 *
 * @param {RegExp | string} [regex] - The `regex` parameter in the
 * `validateFontFileName` function is used to provide a custom regular
 * expression pattern for validating the font file name. If a custom
 * regex pattern is not provided, the function uses a default pattern
 * to validate the font file name.
 *
 * @returns The function `validateFontFileName` is returning a boolean value.
 * It returns `true` if the file name matches the specified pattern,
 * and `false` if it does not match.
 */
const validateFontFileName = async (file: string, regex: RegExp | string = '') => {
  const LETTERS_PATTERN = '[A-Z][a-z]';
  const FONT_FAMILY_PATTERN = `^${LETTERS_PATTERN}+(${LETTERS_PATTERN}+)?`;
  const FONT_WEIGHT_PATTERNS = [
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
  const FONT_EXTENSION_PATTERNS = ['otf', 'ttf', 'woff', 'woff2'].join('|');
  const FAMILY_PATTERN = `(${FONT_FAMILY_PATTERN})`;
  const WEIGHT_PATTERN = `(${FONT_WEIGHT_PATTERNS})`;
  const EXTENSION_PATTERN = `(${FONT_EXTENSION_PATTERNS})$`;
  const FONT_FILE_NAME_PATTERN = new RegExp(
    `${FAMILY_PATTERN}-${WEIGHT_PATTERN}\\.${EXTENSION_PATTERN}`,
  );
  const fileName = parse(file).base;
  const selectPattern =
    typeof regex === 'string' && regex !== ''
      ? new RegExp(regex)
      : regex || FONT_FILE_NAME_PATTERN;
  const match = selectPattern.test(fileName);

  if (!match) {
    console.error(
      chalk.red.bold(`'${fileName}' doesn't match with '${selectPattern}'.`),
    );

    return false;
  }

  return true;
};

export default validateFontFileName;
