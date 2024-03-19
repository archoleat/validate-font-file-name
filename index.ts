import { parse } from 'node:path';

import chalk from 'chalk';

/**
 * The function `validateFontFileName` checks if a given font
 * file name follows a specific naming convention.
 *
 * @param {string} file - The `validateFontFileName` function takes
 * a `file` parameter, which is expected to be a string representing
 * the file name of a font file.
 *
 * @returns The `validateFontFileName` function returns a boolean
 * value - `true` if the font file name matches the specified template
 * 'FontFamily-Fontweight.{otf|ttf|woff|woff2}', and `false` if it
 * doesn't match the template.
 */
const validateFontFileName = async (file: string) => {
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
  const match = FONT_FILE_NAME_PATTERN.test(fileName);

  if (!match) {
    console.error(
      chalk.red.bold(
        `'${fileName}' doesn't match the '{FontFamily}-{FontWeight}.{ext}'.`,
      ),
    );

    return false;
  }

  return true;
};

export default validateFontFileName;
