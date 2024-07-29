import type { PatternExample } from './pattern-example.d.ts';

type Props = {
  file: string;
  pattern?: string | RegExp;
  example?: PatternExample;
};

export { Props };
