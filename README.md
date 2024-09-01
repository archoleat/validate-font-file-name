# Validate Font File Name

![NPM Version](https://img.shields.io/npm/v/%40archoleat%2Fvalidate-font-file-name)
![NPM Downloads](https://img.shields.io/npm/dm/%40archoleat%2Fvalidate-font-file-name)
![ESM](https://img.shields.io/badge/ESM-fe0)
![Provenance](https://img.shields.io/badge/Provenance-fo0)
![CodeQL](https://img.shields.io/github/actions/workflow/status/archoleat/validate-font-file-name/codeql.yaml?label=CodeQL)
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

## Installation

```shell
bun i -D @archoleat/validate-font-file-name
```

## Usage

### Naming Convention

The **font family** and **font weight** must be in **Pascal Case**
and separated by a **hyphen**.

Extensions that are allowed: `otf`, `ttf`, `woff`, `woff2`.

> Example: `OpenSans-SemiBold.woff2`.

It's not necessary to specify the `regex` parameter.

```js
import { validateFontFileName } from '@archoleat/validate-font-file-name';

await validateFontFileName({
  file: 'path/to/file',
  regex: /regex/ | new RegExp() | '',
});
```

## Contributing

Please read [**CONTRIBUTING**](https://github.com/archoleat/.github/blob/main/CONTRIBUTING.md)
to start contributing.

## License

This project is licensed under the [**MIT license**](LICENSE).
