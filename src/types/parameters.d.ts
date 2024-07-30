import type { PatternExample } from '#pattern';

type Parameters = {
  file: string;
  pattern?: string | RegExp;
  example?: PatternExample;
};

export { Parameters };
