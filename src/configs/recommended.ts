import { config, ConfigArray } from 'typescript-eslint';

import { base } from '../rules/base';
import { codeStyle } from '../rules/code-style';
import { imports } from '../rules/imports';

/**
 * Recommended config
 */
export const recommended: ConfigArray = config(
    base,
    imports,
    codeStyle,
    {
        rules: {
            'class-methods-use-this': 'error',
            '@typescript-eslint/explicit-member-accessibility': 'error',
            '@typescript-eslint/explicit-function-return-type': 'error'
        }
    }
);
