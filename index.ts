import chalk from 'chalk';

/**
 * The asynchronous function `validateFontFileName` checks if a given
 * file path matches the pattern 'FontFamily-FontWeight.ext'.
 *
 * @param {string} filePath - The `filePath` parameter is a string
 * that represents the file path of a font file. The function
 * `validateFontFileName` uses a regular expression pattern to check
 * if the file name follows the format 'FontFamily-FontWeight.ext'.
 *
 * @returns If the font file name does not match the pattern,
 * a warning message is logged using `console.warn` and the
 * function does not explicitly return a value
 * (implicitly returns `undefined`).
 */

const validateFontFileName = (filePath: string) => {
  const LETTERS_PATTERN = '[A-Z][a-z]';
  const FONT_FAMILY_PATTERN = `^${LETTERS_PATTERN}+(${LETTERS_PATTERN}+)?`;
  const FONT_WEIGHT_PATTERN = [
    'Thin',
    'Hairline',
    'Extralight',
    'Ultralight',
    'Light',
    'Regular',
    'Medium',
    'Semibold',
    'Demibold',
    'Bold',
    'Extrabold',
    'Ultrabold',
    'Black',
    'Heavy',
    'Extrablack',
    'Ultrablack',
  ].join('|');
  const FONT_EXTENSION_PATTERN = ['otf', 'ttf', 'woff', 'woff2'].join('|');

  const FAMILY_PATTERN = `(${FONT_FAMILY_PATTERN})+((${LETTERS_PATTERN})?)`;
  const WEIGHT_PATTERN = `(${FONT_WEIGHT_PATTERN})`;
  const EXTENSION_PATTERN = `(${FONT_EXTENSION_PATTERN})$`;
  const FONT_FILE_NAME_PATTERN = new RegExp(
    `${FAMILY_PATTERN}-${WEIGHT_PATTERN}\\.${EXTENSION_PATTERN}`,
  );
  const match = FONT_FILE_NAME_PATTERN.test(filePath);

  if (!match) {
    console.warn(
      chalk.yellow.bold(
        `[VALIDATOR]: The font file name '${filePath}' doesn't match the 'FontFamily-Fontweight.{otf|ttf|woff|woff2}' template.`,
      ),
    );

    return false;
  }

  console.info(chalk.green.bold("[VALIDATOR]: There's no naming errors!"));

  return true;
};

export default validateFontFileName;
