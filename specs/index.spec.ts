import { describe, it } from 'mocha';
import { expect } from 'chai';

import validateFontFileName from '../index.ts';

describe('Validate Font File Name', () => {
  it('OpenSans-Semibold.woff2', async () => {
    return validateFontFileName('OpenSans-Semibold.woff2').then((argument) => {
      expect(argument).equal(true);
    });
  });

  it('Open-Semibold.woff2', async () => {
    return validateFontFileName('Open-Semibold.woff2').then((argument) => {
      expect(argument).equal(true);
    });
  });

  it('src/fonts/OpenSans-Semibold.woff2', async () => {
    return validateFontFileName('src/fonts/OpenSans-Semibold.woff2').then(
      (argument) => {
        expect(argument).equal(true);
      },
    );
  });

  it('src/fonts/OpenSans.woff2', async () => {
    return validateFontFileName('src/fonts/OpenSans.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  it('OpenSans-Semibold.unknown', async () => {
    return validateFontFileName('OpenSans-Semibold.unknown').then((argument) => {
      expect(argument).equal(false);
    });
  });

  it('OpenSans-Semibold.woff2.woff2', async () => {
    return validateFontFileName('OpenSans-Semibold.woff2.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  it('OpenSans-SemiBold.woff2', async () => {
    return validateFontFileName('OpenSans-SemiBold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  it('-OpenSans-SemiBold.woff2', async () => {
    return validateFontFileName('-OpenSans-Semibold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  it('OPENSANS-SemiBold.woff2', async () => {
    return validateFontFileName('OPENSANS-Semibold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  it('OpenSans-400.woff2', async () => {
    return validateFontFileName('OpenSans-400.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  it('OpenSans123-Semibold.woff2', async () => {
    return validateFontFileName('OpenSans123-Semibold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  it('openSans-Semibold.woff2', async () => {
    return validateFontFileName('openSans-Semibold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  it('open-Semibold.woff2', async () => {
    return validateFontFileName('open-Semibold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  it('OpenSans-semibold.woff2', async () => {
    return validateFontFileName('OpenSans-semibold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  it('OpenSans-semibold.woff2', async () => {
    return validateFontFileName('OpenSans-semibold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  it('OpenSans-Semiold.woff2', async () => {
    return validateFontFileName('OpenSans-Semiold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  it('OpenSans-Premium-Semibold.woff2', async () => {
    return validateFontFileName('OpenSans-Premium-Semibold.woff2').then(
      (argument) => {
        expect(argument).equal(false);
      },
    );
  });

  it('OpenSans-.woff2', async () => {
    return validateFontFileName('OpenSans-.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  it('openSans-.woff2', async () => {
    return validateFontFileName('openSans-.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  it('-Bold.woff2', async () => {
    return validateFontFileName('-Bold.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  it('OpenSans.woff2', async () => {
    return validateFontFileName('OpenSans.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  it('openSans.woff2', async () => {
    return validateFontFileName('openSans.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });

  it('open.woff2', async () => {
    return validateFontFileName('open.woff2').then((argument) => {
      expect(argument).equal(false);
    });
  });
});
