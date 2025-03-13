import { describe, expect, test as spec } from 'bun:test';

import { validateFontFileName } from '#src/index.ts';

const validTestCases = [
  'FontFamily-UltraBlack.woff2',
  'src/fonts/FontFamily-ExtraBlack.woff',
  'Font-Heavy.otf',
  'FontFamily-Black.ttf',
  'FontFamily-UltraBoldItalic.woff2',
  'FontFamily-ExtraBoldVariable.woff2',
  'FontFamily-BoldItalicVariable.woff2',
  'path/to/fonts/Roboto-Bold.otf',
  'another/path/OpenSans-Light.ttf',
];

const validCustomCases = [
  { file: 'fontfamily-ultrablack.woff2', regex: /^[a-z]+-[a-z]+\.woff2$/ },
];

const invalidTestCases = [
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
  'path/to/fonts/Roboto-Bold',
  'another/path/OpenSans-Light.pdf',
];

const invalidCustomCases = [
  { file: 'FONTFAMILY-ULTRABLACK.WOFF2', regex: /^[a-z]+-[a-z]+\.woff2$/ },
];

describe('Validate Font File Name', () => {
  for (const file of validTestCases) {
    spec(`should validate ${file}`, async () => {
      expect(await validateFontFileName({ file })).toBe(true);
    });
  }

  for (const file of invalidTestCases) {
    spec(`should not validate ${file}`, async () => {
      expect(await validateFontFileName({ file })).toBe(false);
    });
  }

  for (const { file, regex } of validCustomCases) {
    spec(`should validate ${file} with custom regex`, async () => {
      expect(await validateFontFileName({ file, regex })).toBe(true);
    });
  }

  for (const { file, regex } of invalidCustomCases) {
    spec(`should not validate ${file} with custom regex`, async () => {
      expect(await validateFontFileName({ file, regex })).toBe(false);
    });
  }
});
