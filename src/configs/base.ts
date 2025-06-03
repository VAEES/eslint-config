import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import { config, ConfigArray } from 'typescript-eslint';
import tsEslint from 'typescript-eslint';

export const base: ConfigArray = config(
    eslint.configs.recommended,
    tsEslint.configs.recommendedTypeChecked,
    tsEslint.configs.stylisticTypeChecked,
    stylistic.configs.customize({
        semi: true,
        indent: 4,
    }),
    {
        languageOptions: {
            globals: globals.node,
        },
        plugins: {
            'unused-imports': unusedImports,
            'simple-import-sort': simpleImportSort,
            '@stylistic': stylistic,
        },
        rules: {
            '@stylistic/array-bracket-newline': ['error', 'consistent'],
            '@stylistic/array-element-newline': ['error', 'consistent'],
            '@stylistic/arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
            '@stylistic/curly-newline': ['error', { minElements: 1 }],

            'unused-imports/no-unused-imports': 'warn',

            'simple-import-sort/imports': [
                'warn',
                {
                    groups: [
                        // 1. Side effect imports
                        ['^\\u0000'],
                        // 2. External libraries (regular packages and scoped packages, but exclude our aliases)
                        ['^[^@.]', '^@(?!models/|tests/|/)'],
                        // 3. @models/* aliases
                        ['^@models/'],
                        // 4. @tests/* aliases
                        ['^@tests/'],
                        // 5. @/ aliases
                        ['^@/'],
                    ],
                },
            ],
            'simple-import-sort/exports': 'warn',

            '@typescript-eslint/no-namespace': 'off',

            'no-console': 'error',
            'max-lines-per-function': ['warn', 30],
            'curly': ['error', 'all'],
        },
    });
