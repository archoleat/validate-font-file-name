import { parse } from 'node:path';

import { FONT_FILE_NAME_REGEX } from '@archoleat/reglib';
import { error } from '@archoleat/notifier';

import type { Parameters } from './parameters.ts';

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
  const { file, regex = '' } = parameters;

  const fileName = parse(file).base;
  const regexType = typeof regex === 'string' && regex !== '';
  const selectRegex = regexType ? new RegExp(regex) : regex || FONT_FILE_NAME_REGEX;
  const match = selectRegex.test(fileName);

  if (!match) {
    await error({
      message: [`(${fileName}) doesn't match with (${selectRegex})`],
    });

    return false;
  }

  return true;
};

export { validateFontFileName };
