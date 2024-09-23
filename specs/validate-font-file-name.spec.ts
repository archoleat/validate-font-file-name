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
  'src/fonts/OpenSans.woff2',
  'OpenSans-SemiBold.unknown',
  'OpenSans-SemiBold.woff2.woff2',
  '-OpenSans-SemiBold.woff2',
  'OPENSANS-SemiBold.woff2',
  'OpenSans-400.woff2',
  'OpenSans123-SemiBold.woff2',
  'openSans-SemiBold.woff2',
  'OpenSans-semiBold.woff2',
  'OpenSans-Semibold.woff2',
  'OpenSans-semibold.woff2',
  'OpenSans-SEMIBOLD.woff2',
  'OpenSans-Semiold.woff2',
  'OpenSans-Premium-SemiBold.woff2',
  'OpenSans-.woff2',
  '-SemiBold.woff2',
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
