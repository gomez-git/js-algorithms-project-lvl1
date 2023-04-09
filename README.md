### Hexlet tests and linter status:
[![Actions Status](https://github.com/gomez-git/js-algorithms-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/gomez-git/js-algorithms-project-lvl1/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/b38441d794dfc8296bcb/maintainability)](https://codeclimate.com/github/gomez-git/js-algorithms-project-lvl1/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b38441d794dfc8296bcb/test_coverage)](https://codeclimate.com/github/gomez-git/js-algorithms-project-lvl1/test_coverage)
[![Known Vulnerabilities](https://snyk.io/test/github/gomez-git/js-algorithms-project-lvl1/badge.svg)](https://snyk.io/test/github/gomez-git/js-algorithms-project-lvl1)
[![NodeCI](https://github.com/gomez-git/js-algorithms-project-lvl1/actions/workflows/NodeCI.yml/badge.svg?branch=main)](https://github.com/gomez-git/js-algorithms-project-lvl1/actions/workflows/NodeCI.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Install my package:

```bash
npm install https://github.com/gomez-git/js-algorithms-project-lvl1.git

```

Search engine allows to search pattern in provided docs:

```js
import search from '@hexlet/code';

const doc1 = { id: 'doc1', text: 'hello world!' };
const doc2 = { id: 'doc2', text: 'Im simple text.' };
const doc3 = { id: 'doc3', text: 'Hello hello' };
const docs = [doc1, doc2, doc3];

search(docs, 'hello'); // ['doc1', 'doc3']

```
