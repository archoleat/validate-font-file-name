import { beforeEach, describe, expect, test as spec } from 'vitest';

import { validateFontFileName } from '#src';

describe('Validate Font File Name', () => {
  let validate: Function;

  beforeEach(() => {
    const addValidate = async (
      file: string,
      equal: boolean,
      pattern?: string | RegExp,
    ) => {
      return validateFontFileName({ file, pattern }).then((parameter) => {
        expect(parameter).equal(equal);
      });
    };

    validate = addValidate;
  });

  spec('OpenSans-SemiBold.woff2', async () => {
    return validate('OpenSans-SemiBold.woff2', true);
  });

  spec('pattern: /OpenSans-SemiBold\\.woff2/', async () => {
    return validate('OpenSans-SemiBold.woff2', true, /OpenSans-SemiBold\.woff2/);
  });

  spec("pattern: new RegExp('OpenSans-SemiBold.woff2')", async () => {
    return validate(
      'OpenSans-SemiBold.woff2',
      true,
      new RegExp('OpenSans-SemiBold.woff2'),
    );
  });

  spec("pattern: 'OpenSans-SemiBold.woff2'", async () => {
    return validate('OpenSans-SemiBold.woff2', true, 'OpenSans-SemiBold.woff2');
  });

  spec('Open-SemiBold.woff2', async () => {
    return validate('Open-SemiBold.woff2', true);
  });

  spec('src/fonts/OpenSans-SemiBold.woff2', async () => {
    return validate('src/fonts/OpenSans-SemiBold.woff2', true);
  });

  spec('Open-Sans-SemiBold.woff2', async () => {
    return validate('Open-Sans-SemiBold.woff2', false);
  });

  spec('src/fonts/OpenSans.woff2', async () => {
    return validate('src/fonts/OpenSans.woff2', false);
  });

  spec('OpenSans-SemiBold.unknown', async () => {
    return validate('OpenSans-SemiBold.unknown', false);
  });

  spec('OpenSans-SemiBold.woff2.woff2', async () => {
    return validate('OpenSans-SemiBold.woff2.woff2', false);
  });

  spec('-OpenSans-SemiBold.woff2', async () => {
    return validate('-OpenSans-Semibold.woff2', false);
  });

  spec('OPENSANS-SemiBold.woff2', async () => {
    return validate('OPENSANS-SemiBold.woff2', false);
  });

  spec('OpenSans-400.woff2', async () => {
    return validate('OpenSans-400.woff2', false);
  });

  spec('OpenSans123-SemiBold.woff2', async () => {
    return validate('OpenSans123-SemiBold.woff2', false);
  });

  spec('openSans-SemiBold.woff2', async () => {
    return validate('openSans-SemiBold.woff2', false);
  });

  spec('OpenSans-semiBold.woff2', async () => {
    return validate('OpenSans-semiBold.woff2', false);
  });

  spec('OpenSans-Semibold.woff2', async () => {
    return validate('OpenSans-Semibold.woff2', false);
  });

  spec('OpenSans-semibold.woff2', async () => {
    return validate('OpenSans-semibold.woff2', false);
  });

  spec('OpenSans-SEMIBOLD.woff2', async () => {
    return validate('OpenSans-SEMIBOLD.woff2', false);
  });

  spec('OpenSans-Semiold.woff2', async () => {
    return validate('OpenSans-Semiold.woff2', false);
  });

  spec('OpenSans-Premium-SemiBold.woff2', async () => {
    return validate('OpenSans-Premium-SemiBold.woff2', false);
  });

  spec('OpenSans-.woff2', async () => {
    return validate('OpenSans-.woff2', false);
  });

  spec('-SemiBold.woff2', async () => {
    return validate('-SemiBold.woff2', false);
  });

  spec('OpenSans.woff2', async () => {
    return validate('OpenSans.woff2', false);
  });
});
