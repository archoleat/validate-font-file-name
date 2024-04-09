import { describe, expect, test as spec } from 'vitest';

import { validateFontFileName } from '../src/index.ts';

describe('Validate Font File Name', () => {
  spec('OpenSans-SemiBold.woff2', async () => {
    return validateFontFileName('OpenSans-SemiBold.woff2').then((argument) => {
      expect(argument).equal(true);
    });
  });

  spec('argument regex: /OpenSans-Semibold\\.woff2/', async () => {
    return validateFontFileName(
      'OpenSans-Semibold.woff2',
      /OpenSans-Semibold\.woff2/,
    ).then((argument) => {
      expect(argument).equal(true);
    });
  });

  spec("argument regex: new RegExp('OpenSans-Semibold.woff2')", async () => {
    return validateFontFileName(
      'OpenSans-Semibold.woff2',
      new RegExp('OpenSans-Semibold.woff2'),
    ).then((argument) => {
      expect(argument).equal(true);
    });
  });

  spec("argument regex: 'OpenSans-Semibold.woff2'", async () => {
    return validateFontFileName(
      'OpenSans-Semibold.woff2',
      'OpenSans-Semibold.woff2',
    ).then((argument) => {
      expect(argument).equal(true);
    });
  });

  spec('Open-SemiBold.woff2', async () => {
    return validateFontFileName('Open-SemiBold.woff2').then((argument) => {
      expect(argument).equal(true);
    });
  });

  spec('src/fonts/OpenSans-SemiBold.woff2', async () => {
    return validateFontFileName('src/fonts/OpenSans-SemiBold.woff2').then(
      (argument) => {
        expect(argument).equal(true);
      },
    );
  });

  spec('src/fonts/OpenSans.woff2', async () => {
    return validateFontFileName('src/fonts/OpenSans.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  spec('OpenSans-SemiBold.unknown', async () => {
    return validateFontFileName('OpenSans-SemiBold.unknown').then((argument) => {
      expect(argument).equal(false);
    });
  });

  spec('OpenSans-SemiBold.woff2.woff2', async () => {
    return validateFontFileName('OpenSans-SemiBold.woff2.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  spec('-OpenSans-SemiBold.woff2', async () => {
    return validateFontFileName('-OpenSans-Semibold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  spec('OPENSANS-SemiBold.woff2', async () => {
    return validateFontFileName('OPENSANS-SemiBold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  spec('OpenSans-400.woff2', async () => {
    return validateFontFileName('OpenSans-400.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  spec('OpenSans123-SemiBold.woff2', async () => {
    return validateFontFileName('OpenSans123-SemiBold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  spec('openSans-SemiBold.woff2', async () => {
    return validateFontFileName('openSans-SemiBold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  spec('open-SemiBold.woff2', async () => {
    return validateFontFileName('open-SemiBold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  spec('OpenSans-semiBold.woff2', async () => {
    return validateFontFileName('OpenSans-semiBold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  spec('OpenSans-Semibold.woff2', async () => {
    return validateFontFileName('OpenSans-Semibold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  spec('OpenSans-semibold.woff2', async () => {
    return validateFontFileName('OpenSans-semibold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  spec('OpenSans-Semiold.woff2', async () => {
    return validateFontFileName('OpenSans-Semiold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  spec('OpenSans-Premium-SemiBold.woff2', async () => {
    return validateFontFileName('OpenSans-Premium-SemiBold.woff2').then(
      (argument) => {
        expect(argument).equal(false);
      },
    );
  });

  spec('OpenSans-.woff2', async () => {
    return validateFontFileName('OpenSans-.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  spec('openSans-.woff2', async () => {
    return validateFontFileName('openSans-.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  spec('-Bold.woff2', async () => {
    return validateFontFileName('-SemiBold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  spec('OpenSans.woff2', async () => {
    return validateFontFileName('OpenSans.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  spec('openSans.woff2', async () => {
    return validateFontFileName('openSans.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  spec('open.woff2', async () => {
    return validateFontFileName('open.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });
});
