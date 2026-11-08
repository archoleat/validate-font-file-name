import { describe, expect, test as spec } from 'bun:test';

import { validateFontFileName } from '#src/index.ts';

describe('Reusable custom expressions', () => {
  for (const flags of ['g', 'y', 'gy']) {
    spec(
      `should not read or mutate the lastIndex of a ${flags} expression`,
      async () => {
        const regex = new RegExp('^Font-Regular\\.woff2$', flags);
        regex.lastIndex = 3;

        for (let attempt = 0; attempt < 2; attempt++) {
          expect(
            await validateFontFileName({ file: 'Font-Regular.woff2', regex }),
          ).toBe(true);
          expect(regex.lastIndex).toBe(3);
          expect(
            await validateFontFileName({ file: 'Other-Regular.woff2', regex }),
          ).toBe(false);
          expect(regex.lastIndex).toBe(3);
        }
      },
    );
  }
});
