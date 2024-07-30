import type { PatternExample } from './pattern-example.d.ts';

type Parameters = {
  file: string;
  pattern?: string | RegExp;
  example?: PatternExample;
};

export { Parameters };
