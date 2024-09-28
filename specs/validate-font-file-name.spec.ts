import { describe, expect, test as spec } from 'vitest';

import { validateFontFileName } from '#index';

const positiveCases = [
  'FontFamily-UltraBlack.woff2',
  'src/fonts/FontFamily-ExtraBlack.woff',
  'Font-Heavy.otf',
  'FontFamily-Black.ttf',
  'FontFamily-UltraBoldItalic.woff2',
  'FontFamily-ExtraBoldVariable.woff2',
  'FontFamily-BoldItalicVariable.woff2',
];

const negativeCases = [
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
});
