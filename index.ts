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
const validateFontFileName = (file: string) => {
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
  const fileName = file.slice(file.lastIndexOf('/') + 1, file.lastIndexOf(''));
  const match = FONT_FILE_NAME_PATTERN.test(fileName);

  if (!match) {
    console.warn(
      chalk.yellow.bold(
        `[VALIDATOR]: The font file name '${fileName}' doesn't match the 'FontFamily-Fontweight.{otf|ttf|woff|woff2}' template.`,
      ),
    );

    return false;
  }

  console.info(chalk.green.bold("[VALIDATOR]: There's no naming errors!"));

  return true;
};

export default validateFontFileName;
