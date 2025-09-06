# Validate Font File Name

![NPM Version](https://img.shields.io/npm/v/%40archoleat%2Fvalidate-font-file-name)
![NPM Downloads](https://img.shields.io/npm/dm/%40archoleat%2Fvalidate-font-file-name)
![Specs](https://img.shields.io/github/actions/workflow/status/archoleat/validate-font-file-name/spec.yaml?label=Specs)
![Commitlint](https://img.shields.io/github/actions/workflow/status/archoleat/validate-font-file-name/commitlint.yaml?label=Commitlint)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/archoleat/validate-font-file-name/editorconfig.yaml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/archoleat/validate-font-file-name/prettier.yaml?label=Prettier)
![ESLint](https://img.shields.io/github/actions/workflow/status/archoleat/validate-font-file-name/eslint.yaml?label=ESLint)
![Remark](https://img.shields.io/github/actions/workflow/status/archoleat/validate-font-file-name/remark.yaml?label=Remark)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

Validate font file names.

## Installation

```shell
bun i -D @archoleat/validate-font-file-name
```

## Usage

```js
import { validateFontFileName } from '@archoleat/validate-font-file-name';

await validateFontFileName({
  file: string,
  regex?: string | RegExp,
});
```

### Naming Convention

The **font family** and **font weight** must be in **Pascal Case**
and separated by a **hyphen**.

Postfixes that are allowed: `Italic`, `Variable`.

Extensions that are allowed: `woff2`, `woff`, `otf`, `ttf`.

> Examples: `FontFamily-Bold.woff2`,
> `FontFamily-SemiBoldItalic.woff`, `FontFamily-MediumVariable.otf`,
> `FontFamily-RegularItalicVariable.ttf`.

## Contributing

Please read [**CONTRIBUTING**](https://github.com/archoleat/.github/blob/main/CONTRIBUTING.md)
to start contributing.

## License

This project is licensed under the [**MIT license**](LICENSE).
