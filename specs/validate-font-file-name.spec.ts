import { beforeEach, describe, expect, test as spec } from 'vitest';

import { validateFontFileName } from '#app';

describe('Validate Font File Name', () => {
  let validate: Function;

  beforeEach(() => {
    const addValidate = async (
      file: string,
      equal: boolean,
      regex?: string | RegExp,
    ) => {
      return await validateFontFileName({ file, regex }).then((parameters) => {
        expect(parameters).equal(equal);
      });
    };

    validate = addValidate;
  });

  spec('OpenSans-SemiBold.woff2', async () => {
    return await validate('OpenSans-SemiBold.woff2', true);
  });

  spec('regex: /OpenSans-SemiBold\\.woff2/', async () => {
    return await validate(
      'OpenSans-SemiBold.woff2',
      true,
      /OpenSans-SemiBold\.woff2/,
    );
  });

  spec("regex: new RegExp('OpenSans-SemiBold.woff2')", async () => {
    return await validate(
      'OpenSans-SemiBold.woff2',
      true,
      new RegExp('OpenSans-SemiBold.woff2'),
    );
  });

  spec("regex: 'OpenSans-SemiBold.woff2'", async () => {
    return await validate(
      'OpenSans-SemiBold.woff2',
      true,
      'OpenSans-SemiBold.woff2',
    );
  });

  spec('Open-SemiBold.woff2', async () => {
    return await validate('Open-SemiBold.woff2', true);
  });

  spec('src/fonts/OpenSans-SemiBold.woff2', async () => {
    return await validate('src/fonts/OpenSans-SemiBold.woff2', true);
  });

  spec('Open-Sans-SemiBold.woff2', async () => {
    return await validate('Open-Sans-SemiBold.woff2', false);
  });

  spec('src/fonts/OpenSans.woff2', async () => {
    return await validate('src/fonts/OpenSans.woff2', false);
  });

  spec('OpenSans-SemiBold.unknown', async () => {
    return await validate('OpenSans-SemiBold.unknown', false);
  });

  spec('OpenSans-SemiBold.woff2.woff2', async () => {
    return await validate('OpenSans-SemiBold.woff2.woff2', false);
  });

  spec('-OpenSans-SemiBold.woff2', async () => {
    return await validate('-OpenSans-Semibold.woff2', false);
  });

  spec('OPENSANS-SemiBold.woff2', async () => {
    return await validate('OPENSANS-SemiBold.woff2', false);
  });

  spec('OpenSans-400.woff2', async () => {
    return await validate('OpenSans-400.woff2', false);
  });

  spec('OpenSans123-SemiBold.woff2', async () => {
    return await validate('OpenSans123-SemiBold.woff2', false);
  });

  spec('openSans-SemiBold.woff2', async () => {
    return await validate('openSans-SemiBold.woff2', false);
  });

  spec('OpenSans-semiBold.woff2', async () => {
    return await validate('OpenSans-semiBold.woff2', false);
  });

  spec('OpenSans-Semibold.woff2', async () => {
    return await validate('OpenSans-Semibold.woff2', false);
  });

  spec('OpenSans-semibold.woff2', async () => {
    return await validate('OpenSans-semibold.woff2', false);
  });

  spec('OpenSans-SEMIBOLD.woff2', async () => {
    return await validate('OpenSans-SEMIBOLD.woff2', false);
  });

  spec('OpenSans-Semiold.woff2', async () => {
    return await validate('OpenSans-Semiold.woff2', false);
  });

  spec('OpenSans-Premium-SemiBold.woff2', async () => {
    return await validate('OpenSans-Premium-SemiBold.woff2', false);
  });

  spec('OpenSans-.woff2', async () => {
    return await validate('OpenSans-.woff2', false);
  });

  spec('-SemiBold.woff2', async () => {
    return await validate('-SemiBold.woff2', false);
  });

  spec('OpenSans.woff2', async () => {
    return await validate('OpenSans.woff2', false);
  });
});
