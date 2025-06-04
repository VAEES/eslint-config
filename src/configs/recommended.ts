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
    codeStyle
);
