import tsEslint from 'typescript-eslint';

import { base } from './configs/base';
import { tests } from './configs/tests';

export const configs = {
    base,
    tests,
};

export const defineConfig = tsEslint.config;
