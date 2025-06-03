import { config, ConfigArray } from 'typescript-eslint';

import { base } from './base';

export const tests: ConfigArray = config(base, {
    rules: {
        'max-lines-per-function': 'off',
        'no-console': 'off',
    },
});
