# eslint-config

This repository contains the ESLint opinionated configurations used by B2RISE projects.

## Installation

```bash
yarn add -D @b2rise/eslint-config
```

## Usage

First, create an `eslint.config.mjs` file in the root of your project importing the library utility function.

### Example

```javascript title="eslint.config.mjs"
import { defineConfig, configs } from '@b2rise/eslint-config';

export default defineConfig(
    { 
        ignores: ['dist'],
    },
    {
        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.json'],
            }
        }
    },
    {
        files: ['src/**/*.ts'],
        extends: [configs.base],
    },
    {
        files: ['src/**/*.test.ts', 'tests/**/*.ts'],
        extends: [configs.tests],
    }
);
```

## Available configs

- `recommended`: Recommended rules
- `legacy`: Old rules for backward compatibility
- `tests`: Rules for test files
