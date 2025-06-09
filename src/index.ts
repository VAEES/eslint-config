import tsEslint, { ConfigArray } from 'typescript-eslint';

import { legacy, recommended, tests } from './configs';

export interface Configs {
    legacy: ConfigArray;
    recommended: ConfigArray;
    tests: ConfigArray;
}
export const configs: Configs = {
    legacy,
    recommended,
    tests
};

export type DefineConfig = typeof tsEslint.config;
export const defineConfig: DefineConfig = tsEslint.config;
