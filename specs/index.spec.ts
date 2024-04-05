import { describe, expect, test } from 'vitest';

import { validateFontFileName } from '../src/index.ts';

describe('Validate Font File Name', () => {
  test('OpenSans-SemiBold.woff2', async () => {
    return validateFontFileName('OpenSans-SemiBold.woff2').then((argument) => {
      expect(argument).equal(true);
    });
  });

  test('argument regex: /OpenSans-Semibold\\.woff2/', async () => {
    return validateFontFileName(
      'OpenSans-Semibold.woff2',
      /OpenSans-Semibold\.woff2/,
    ).then((argument) => {
      expect(argument).equal(true);
    });
  });

  test("argument regex: new RegExp('OpenSans-Semibold.woff2')", async () => {
    return validateFontFileName(
      'OpenSans-Semibold.woff2',
      new RegExp('OpenSans-Semibold.woff2'),
    ).then((argument) => {
      expect(argument).equal(true);
    });
  });

  test("argument regex: 'OpenSans-Semibold.woff2'", async () => {
    return validateFontFileName(
      'OpenSans-Semibold.woff2',
      'OpenSans-Semibold.woff2',
    ).then((argument) => {
      expect(argument).equal(true);
    });
  });

  test('Open-SemiBold.woff2', async () => {
    return validateFontFileName('Open-SemiBold.woff2').then((argument) => {
      expect(argument).equal(true);
    });
  });

  test('src/fonts/OpenSans-SemiBold.woff2', async () => {
    return validateFontFileName('src/fonts/OpenSans-SemiBold.woff2').then(
      (argument) => {
        expect(argument).equal(true);
      },
    );
  });

  test('src/fonts/OpenSans.woff2', async () => {
    return validateFontFileName('src/fonts/OpenSans.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  test('OpenSans-SemiBold.unknown', async () => {
    return validateFontFileName('OpenSans-SemiBold.unknown').then((argument) => {
      expect(argument).equal(false);
    });
  });

  test('OpenSans-SemiBold.woff2.woff2', async () => {
    return validateFontFileName('OpenSans-SemiBold.woff2.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  test('-OpenSans-SemiBold.woff2', async () => {
    return validateFontFileName('-OpenSans-Semibold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  test('OPENSANS-SemiBold.woff2', async () => {
    return validateFontFileName('OPENSANS-SemiBold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  test('OpenSans-400.woff2', async () => {
    return validateFontFileName('OpenSans-400.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  test('OpenSans123-SemiBold.woff2', async () => {
    return validateFontFileName('OpenSans123-SemiBold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  test('openSans-SemiBold.woff2', async () => {
    return validateFontFileName('openSans-SemiBold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  test('open-SemiBold.woff2', async () => {
    return validateFontFileName('open-SemiBold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  test('OpenSans-semiBold.woff2', async () => {
    return validateFontFileName('OpenSans-semiBold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  test('OpenSans-Semibold.woff2', async () => {
    return validateFontFileName('OpenSans-Semibold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  test('OpenSans-semibold.woff2', async () => {
    return validateFontFileName('OpenSans-semibold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  test('OpenSans-Semiold.woff2', async () => {
    return validateFontFileName('OpenSans-Semiold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  test('OpenSans-Premium-SemiBold.woff2', async () => {
    return validateFontFileName('OpenSans-Premium-SemiBold.woff2').then(
      (argument) => {
        expect(argument).equal(false);
      },
    );
  });

  test('OpenSans-.woff2', async () => {
    return validateFontFileName('OpenSans-.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  test('openSans-.woff2', async () => {
    return validateFontFileName('openSans-.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  test('-Bold.woff2', async () => {
    return validateFontFileName('-SemiBold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  test('OpenSans.woff2', async () => {
    return validateFontFileName('OpenSans.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  test('openSans.woff2', async () => {
    return validateFontFileName('openSans.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  test('open.woff2', async () => {
    return validateFontFileName('open.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });
});
