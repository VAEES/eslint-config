import { config, ConfigArray } from 'typescript-eslint';

import { base } from '../rules/base';
import { codeStyle } from '../rules/code-style';
import { imports } from '../rules/imports';

/**
 * Tests config
 */
export const tests: ConfigArray = config(
    base,
    imports,
    codeStyle,
    {
        rules: {
            'max-lines-per-function': 'off',
            'no-console': 'off',
        },
    }
);
