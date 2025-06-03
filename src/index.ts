import tsEslint, { ConfigArray } from 'typescript-eslint';

import { base } from './configs/base';
import { tests } from './configs/tests';

export interface Configs {
    base: ConfigArray;
    tests: ConfigArray;
}

export type DefineConfig = typeof tsEslint.config;

export const configs: Configs = {
    base,
    tests,
};

export const defineConfig: DefineConfig = tsEslint.config;
