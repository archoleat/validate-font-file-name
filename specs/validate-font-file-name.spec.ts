import { describe, expect, test as spec } from 'vitest';

import { validateFontFileName } from '#index';

const positiveCases = [
  'OpenSans-SemiBold.woff2',
  'src/fonts/OpenSans-SemiBold.woff',
  'Open-SemiBold.otf',
  'OpenSans-SemiBold.ttf',
];

const negativeCases = [
  'Open-Sans-SemiBold.woff2',
  'src/fonts/OpenSans.woff',
  'OpenSans-SemiBold.unknown',
  'OpenSans-SemiBold.woff2.otf',
  '-OpenSans-SemiBold.ttf',
  'OPENSANS-SemiBold.woff2',
  'OpenSans-400.woff',
  'OpenSans123-SemiBold.otf',
  'openSans-SemiBold.ttf',
  'OpenSans-semiBold.woff2',
  'OpenSans-Semibold.woff',
  'OpenSans-semibold.otf',
  'OpenSans-SEMIBOLD.ttf',
  'OpenSans-Semiold.woff2',
  'OpenSans-Premium-SemiBold.woff',
  'OpenSans-.otf',
  '-SemiBold.ttf',
  'OpenSans.woff2',
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
