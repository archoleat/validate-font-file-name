# Validate Font File Name

![NPM Version](https://img.shields.io/npm/v/%40archoleat%2Fvalidate-font-file-name)
![NPM Downloads](https://img.shields.io/npm/dm/%40archoleat%2Fvalidate-font-file-name)
![CodeQL](https://img.shields.io/github/actions/workflow/status/archoleat/validate-font-file-name/codeql.yaml?label=CodeQL)
![Specs](https://img.shields.io/github/actions/workflow/status/archoleat/validate-font-file-name/spec.yaml?label=Specs)
![Commitlint](https://img.shields.io/github/actions/workflow/status/archoleat/validate-font-file-name/commitlint.yaml?label=Commitlint)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/archoleat/validate-font-file-name/editorconfig.yaml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/archoleat/validate-font-file-name/prettier.yaml?label=Prettier)
![ESLint](https://img.shields.io/github/actions/workflow/status/archoleat/validate-font-file-name/eslint.yaml?label=ESLint)
![Markdown](https://img.shields.io/github/actions/workflow/status/archoleat/validate-font-file-name/markdown.yaml?label=Markdown)
![ESM Only](https://img.shields.io/badge/ESM-only-gray?labelColor=fe0)

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Naming Convention](#naming-convention)
-   [Contributing](#contributing)
-   [License](#license)

## Installation

```shell
# pnpm
pnpm i -D @archoleat/validate-font-file-name
```

```shell
# npm
npm i -D @archoleat/validate-font-file-name
```

```shell
# yarn
yarn add -D @archoleat/validate-font-file-name
```

## Usage

```js
import { validateFontFileName } from '@archoleat/validate-font-file-name';

const validFontFileName = 'src/fonts/OpenSans-Regular.woff2';
const invalidFontFileName = 'src/fonts/OpenSans.woff2';

// returns: true
console.log(await validateFontFileName(validFontFileName));

// returns: 'OpenSans.woff2' doesn't match with '/(^[A-Z][a-z]+([A-Z][a-z]+)?)-(Thin|Hairline|ExtraLight|UltraLight|Light|Regular|Medium|SemiBold|DemiBold|Bold|ExtraBold|UltraBold|Black|Heavy|ExtraBlack|UltraBlack)\.(otf|ttf|woff|woff2)$/'.
console.log(await validateFontFileName(invalidFontFileName));
```

or

```js
import { validateFontFileName } from '@archoleat/validate-font-file-name';

const validFontFileName = 'OpenSans-Regular.woff2';
const invalidFontFileName = 'OpenSans.woff2';

// returns: true
console.log(await validateFontFileName(validFontFileName));

// returns: 'OpenSans.woff2' doesn't match with '/(^[A-Z][a-z]+([A-Z][a-z]+)?)-(Thin|Hairline|ExtraLight|UltraLight|Light|Regular|Medium|SemiBold|DemiBold|Bold|ExtraBold|UltraBold|Black|Heavy|ExtraBlack|UltraBlack)\.(otf|ttf|woff|woff2)$/'.
console.log(await validateFontFileName(invalidFontFileName));
```

### Your Regex

You can also specify your pattern:

```js
import { validateFontFileName } from '@archoleat/validate-font-file-name';

// You can also specify `new RegExp()` and a regular `string`
const yourPattern = /OpenSans-regular/;

const validFontFileName = 'OpenSans-regular';
const invalidFontFileName = 'OpenSans.woff2';

// returns: true
console.log(await validateFontFileName(validFontFileName, yourPattern));

// returns: 'OpenSans.woff2' doesn't match with '/OpenSans-regular/'.
console.log(await validateFontFileName(invalidFontFileName, yourPattern));
```

## Naming Convention

The **font family** and **font weight** must be in **Pascal Case**
and separated by a **hyphen**.

Extensions that are allowed: `otf`, `ttf`, `woff`, `woff2`.

> `{FontFamily}-{FontWeight}.{ext}`

## Contributing

Please read [**CONTRIBUTING**](https://github.com/archoleat/.github/blob/main/CONTRIBUTING.md)
to start contributing.

## License

This project is licensed under the [**MIT license**](LICENSE).
