# Archoleat Repo Template

![NPM Version](https://img.shields.io/npm/v/%40archoleat%2Fvalidate-font-file-name)
![NPM Downloads](https://img.shields.io/npm/dm/%40archoleat%2Fvalidate-font-file-name)
![CodeQL](https://img.shields.io/github/actions/workflow/status/archoleat/validate-font-file-name/codeql.yaml?label=CodeQL)
![Test](https://img.shields.io/github/actions/workflow/status/archoleat/validate-font-file-name/mocha.yaml?label=Test)
![Commitlint](https://img.shields.io/github/actions/workflow/status/archoleat/validate-font-file-name/commitlint.yaml?label=Commitlint)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/archoleat/validate-font-file-name/editorconfig.yaml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/archoleat/validate-font-file-name/prettier.yaml?label=Prettier)
![ESLint](https://img.shields.io/github/actions/workflow/status/archoleat/validate-font-file-name/eslint.yaml?label=ESLint)
![Markdown](https://img.shields.io/github/actions/workflow/status/archoleat/validate-font-file-name/markdown.yaml?label=Markdown)
![ESM Only](https://img.shields.io/badge/ESM-only-gray?labelColor=fe0)

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Troubleshooting](#troubleshooting)
-   [Contributing](#contributing)
-   [License](#license)

## Installation

```shell
# npm
npm i -D @archoleat/validate-font-file-name
```

```shell
# pnpm
pnpm i -D @archoleat/validate-font-file-name
```

```shell
# yarn
yarn add -D @archoleat/validate-font-file-name
```

## Usage

```js
import validateFontFileName from '@archoleat/validate-font-file-name';

const validFontFileName = 'src/fonts/OpenSans-Regular.woff2';
const invalidFontFileName = 'src/fonts/OpenSans.woff2';

console.log(validateFontFileName(validFontFileName))
// [VALIDATOR]: There's no naming errors!

console.log(validateFontFileName(invalidFontFileName))
// [VALIDATOR]: The font file name 'OpenSans.woff2' doesn't match the 'FontFamily-Fontweight.{otf|ttf|woff|woff2}' template.
```

## Troubleshooting

If you are using **npm** you may get an error related to these plugins:

-   `typescript-eslint/eslint-plugin`.
-   `typescript-eslint/parser`.

To fix this you can switch to **pnpm**(recommended) or install version `6.0.0`.

## Contributing

Please read [**CONTRIBUTING**](https://github.com/archoleat/.github/blob/main/CONTRIBUTING.md)
to start contributing.

## License

This project is licensed under the [**MIT license**](LICENSE).
