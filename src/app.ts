import { parse } from 'node:path';

import { FONT_FILE_NAME_REGEX } from '@archoleat/reglib';
import { error } from '@archoleat/notifier';

import type { Parameters } from './parameters.ts';

/**
 * Validates the font file name.
 *
 * @param {string} file - The file path of the font file.
 *
 * @param {string} [regex=''] - The regular expression pattern to
 * match the font file name.
 *
 * @return {boolean} - Return true if the font file name matches the
 * specified regex pattern, false otherwise.
 */
const validateFontFileName = async (parameters: Parameters) => {
  const { file, regex = '' } = parameters;

  const fileName = parse(file).base;
  const regexType = typeof regex === 'string' && regex !== '';
  const selectRegex = regexType ? new RegExp(regex) : regex || FONT_FILE_NAME_REGEX;
  const match = selectRegex.test(fileName);

  if (!match) {
    await error({
      message: `(${fileName}) doesn't match with (${selectRegex})`,
    });

    return false;
  }

  return true;
};

export { validateFontFileName };
