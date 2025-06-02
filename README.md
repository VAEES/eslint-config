# eslint-configs

This repository contains the ESLint opinionated configurations used by B2RISE projects.

## Installation

```bash
npm install -D @b2rise/eslint-config
# or
yarn add -D @b2rise/eslint-config
# or
pnpm add -D @b2rise/eslint-config
```

## Usage

First, create an `eslint.config.mjs` file in the root of your project importing the library utility function.

### Example

```javascript title="eslint.config.mjs"
import { defineConfig, configs } from '@b2rise/eslint-config';

export default defineConfig(
    {
        ignores: ['node_modules', 'dist'],
    },
    {
        files: ['packages/**/*.ts'],
        extends: [
            configs.base({
                typeChecked: true,
                enableHeavyRules: process.env.CI === 'true',
                moduleResolution: 'node10',
            }),
        ],
    },
    {
        languageOptions: {
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: ['./tsconfig.json', './packages/*/tsconfig.json'],
            },
        },
    }
    {
        files: ['packages/**/*.js'],
        extends: [
            configs.base({
                typeChecked: false,
                enableHeavyRules: process.env.CI === 'true',
                moduleResolution: 'node10',
            }),
        ],
    },
    {
        files: ['packages/web'],
        extends: [configs.react()],
    },
    ...configs.disableFormatting
);
```
