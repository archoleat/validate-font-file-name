import { describe, expect, test as spec } from 'bun:test';

import { validateFontFileName } from '#src/index.ts';

const positiveCases = [
  'FontFamily-UltraBlack.woff2',
  'src/fonts/FontFamily-ExtraBlack.woff',
  'Font-Heavy.otf',
  'FontFamily-Black.ttf',
  'FontFamily-UltraBoldItalic.woff2',
  'FontFamily-ExtraBoldVariable.woff2',
  'FontFamily-BoldItalicVariable.woff2',
];

const positiveCustomCases = ['fontfamily-ultrablack.woff2'];

const negativeCases = [
  '',
  'Font-Family-UltraBlack.woff2',
  'src/fonts/FontFamily.woff',
  'FontFamily-ExtraBlack.unknown',
  'FontFamily-Heavy.woff2.otf',
  '-FontFamily-UltraBold.ttf',
  'FONTFAMILY-ExtraBold.woff2',
  'FontFamily-400.woff',
  'FontFamily123-Bold.otf',
  'fontFamily-DemiBold.ttf',
  'FontFamily-semiBold.woff2',
  'FontFamily-Semibold.woff',
  'FontFamily-semibold.otf',
  'FontFamily-MEDIUM.ttf',
  'FontFamily-Semiold.woff2',
  'FontFamily-Premium-Regular.woff',
  'FontFamily-.otf',
  '-UltraLight.ttf',
  'FontFamily.woff2',
];

const negativeCustomCases = ['FONTFAMILY-ULTRABLACK.WOFF2'];

describe('Validate Font File Name', async () => {
  positiveCases.forEach(async (file) => {
    spec(`should validate ${file}`, async () => {
      expect(await validateFontFileName({ file })).toEqual(true);
    });
  });

  negativeCases.forEach(async (file) => {
    spec(`should not validate ${file}`, async () => {
      expect(await validateFontFileName({ file })).toEqual(false);
    });
  });

  positiveCustomCases.forEach(async (file) => {
    spec(`should validate ${file}`, async () => {
      expect(await validateFontFileName({ file, regex: /\w+/i })).toEqual(true);
    });
  });

  negativeCustomCases.forEach(async (file) => {
    spec(`should not validate ${file}`, async () => {
      expect(
        await validateFontFileName({ file, regex: new RegExp('123', 'g') }),
      ).toEqual(false);
    });
  });
});
