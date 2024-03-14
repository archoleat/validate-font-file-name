import { describe, it } from 'mocha';
import { expect } from 'chai';

import validateFontFileName from '../index.ts';

describe('Validate Font File Name', () => {
  it('OpenSans-Semibold.woff2', () => {
    expect(validateFontFileName('OpenSans-Semibold.woff2')).equal(true);
  });

  it('Open-Semibold.woff2', () => {
    expect(validateFontFileName('Open-Semibold.woff2')).equal(true);
  });

  it('src/fonts/OpenSans-Semibold.woff2', () => {
    expect(validateFontFileName('src/fonts/OpenSans-Semibold.woff2')).equal(true);
  });

  it('src/fonts/OpenSans.woff2', () => {
    expect(validateFontFileName('src/fonts/OpenSans.woff2')).equal(false);
  });

  it('OpenSans-Semibold.unknown', () => {
    expect(validateFontFileName('OpenSans-Semibold.unknown')).equal(false);
  });

  it('OpenSans-Semibold.woff2.woff2', () => {
    expect(validateFontFileName('OpenSans-Semibold.woff2.woff2')).equal(false);
  });

  it('OpenSans-SemiBold.woff2', () => {
    expect(validateFontFileName('OpenSans-SemiBold.woff2')).equal(false);
  });

  it('-OpenSans-SemiBold.woff2', () => {
    expect(validateFontFileName('-OpenSans-Semibold.woff2')).equal(false);
  });

  it('OPENSANS-SemiBold.woff2', () => {
    expect(validateFontFileName('OPENSANS-Semibold.woff2')).equal(false);
  });

  it('OpenSans-400.woff2', () => {
    expect(validateFontFileName('OpenSans-400.woff2')).equal(false);
  });

  it('OpenSans123-Semibold.woff2', () => {
    expect(validateFontFileName('OpenSans123-Semibold.woff2')).equal(false);
  });

  it('openSans-Semibold.woff2', () => {
    expect(validateFontFileName('openSans-Semibold.woff2')).equal(false);
  });

  it('OpenSans-semibold.woff2', () => {
    expect(validateFontFileName('OpenSans-semibold.woff2')).equal(false);
  });

  it('OpenSans-semibold.woff2', () => {
    expect(validateFontFileName('OpenSans-semibold.woff2')).equal(false);
  });

  it('OpenSans-Semiold.woff2', () => {
    expect(validateFontFileName('OpenSans-Semiold.woff2')).equal(false);
  });

  it('OpenSans-Premium-Semibold.woff2', () => {
    expect(validateFontFileName('OpenSans-Premium-Semibold.woff2')).equal(false);
  });

  it('OpenSans-.woff2', () => {
    expect(validateFontFileName('OpenSans-.woff2')).equal(false);
  });

  it('openSans-.woff2', () => {
    expect(validateFontFileName('openSans-.woff2')).equal(false);
  });

  it('-Bold.woff2', () => {
    expect(validateFontFileName('-Bold.woff2')).equal(false);
  });

  it('OpenSans.woff2', () => {
    expect(validateFontFileName('OpenSans.woff2')).equal(false);
  });

  it('openSans.woff2', () => {
    expect(validateFontFileName('openSans.woff2')).equal(false);
  });

  it('open.woff2', () => {
    expect(validateFontFileName('open.woff2')).equal(false);
  });
});
