import { parse } from 'node:path';

import { error } from '@archoleat/notifier';
import { FONT_FILE_NAME_REGEX } from '@archoleat/reglib';

import type { Parameters } from '#types/parameters.ts';

const validateFontFileName = async (parameters: Parameters) => {
  const { file, regex = '' } = parameters;

  if (!file || typeof file !== 'string') {
    await error({
      message: 'Invalid file provided. File must be a non-empty string.',
    });

    return false;
  }

  const fileName = parse(file).base;
  const isRegex = typeof regex === 'string' && regex !== '';
  const selectRegex = isRegex ? new RegExp(regex) : regex || FONT_FILE_NAME_REGEX;
  const testFileName = selectRegex.test(fileName);

  if (!testFileName) {
    await error({
      message: `(${fileName}) doesn't match with (${selectRegex})`,
    });

    return false;
  }

  return true;
};

export { validateFontFileName };
