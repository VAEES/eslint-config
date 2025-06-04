import tsEslint, { ConfigArray } from 'typescript-eslint';

import { recommended } from './configs/recommended';
import { tests } from './configs/tests';

export interface Configs {
    recommended: ConfigArray;
    tests: ConfigArray;
}

export const configs: Configs = {
    recommended,
    tests,
};

export type DefineConfig = typeof tsEslint.config;

export const defineConfig: DefineConfig = tsEslint.config;
