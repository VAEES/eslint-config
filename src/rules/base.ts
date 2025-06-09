import eslint from '@eslint/js';
import globals from 'globals';
import { config, ConfigArray } from 'typescript-eslint';
import tsEslint from 'typescript-eslint';

/**
 * Base rules.
 */
export const base: ConfigArray = config(
    eslint.configs.recommended,
    tsEslint.configs.recommendedTypeChecked,
    tsEslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            globals: globals.node,
        },
        rules: {
            '@typescript-eslint/no-namespace': 'off',
            'no-console': 'error',
        },
    }
);
