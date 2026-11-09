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
- [Runtime](#runtime)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

Check font filenames against a naming convention in Node.js.

## Installation

```shell
bun i @archoleat/validate-font-file-name
```

Use `bun i -D @archoleat/validate-font-file-name` for build-only validation.

## Runtime

This ES module targets Node.js tooling: it uses `node:path` and a console
notifier. It does not inspect font binaries or require the file to exist.
Bun is used for repository tooling, not required by the published module.

## Usage

```js
import { validateFontFileName } from '@archoleat/validate-font-file-name';

const isValid = await validateFontFileName({
  file: 'public/fonts/Roboto-Bold.woff2',
});

console.log(isValid); // true
```

The function checks the basename, not the file's existence or font contents.
It returns `Promise<boolean>` and logs a console error when validation fails.

| Option | Type | Default |
| --- | --- | --- |
| `file` | `string` | Required |
| `regex` | `string` or `RegExp` | Built-in naming pattern |

`file` must be a non-empty filename or path. `regex` replaces the default
pattern rather than adding a second validation step.

A custom pattern can follow your project's naming convention:

```js
import { validateFontFileName } from '@archoleat/validate-font-file-name';

const isValid = await validateFontFileName({
  file: 'body.woff2',
  regex: /^[a-z]+\.woff2$/,
});

console.log(isValid); // true
```

An invalid regular expression throws; handle that error if the pattern comes
from user input.

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
