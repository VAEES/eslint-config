import tsEslint from 'typescript-eslint';

import { base } from './base';

export const tests = tsEslint.config(base, {
    rules: {
        'max-lines-per-function': 'off',
        'no-console': 'off',
    },
});
