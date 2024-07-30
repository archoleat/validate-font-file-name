import type { RegexExample } from './regex-example.d.ts';

type Parameters = {
  file: string;
  regex?: string | RegExp;
  example?: RegexExample;
};

export { Parameters };
