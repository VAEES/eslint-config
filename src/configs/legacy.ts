import eslint from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tsEslint, { config, ConfigArray } from 'typescript-eslint';

/**
 * Legacy config
 */
export const legacy: ConfigArray = config(
    eslint.configs.recommended,
    ...tsEslint.configs.recommended,
    {
        plugins: {
            prettier
        },
        rules: {
            'prettier/prettier': [
                'error',
                {
                    singleQuote: true,
                    tabWidth: 4,
                    trailingComma: 'none',
                    bracketSpacing: true,
                    printWidth: 180
                }
            ],
            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^ignore',
                    ignoreRestSiblings: true
                }
            ],
            '@typescript-eslint/no-var-requires': 'off',
            'eol-last': 'error',
            'indent': [
                'error',
                4,
                {
                    SwitchCase: 1
                }
            ],
            'linebreak-style': 'off',
            'max-len': [
                'error',
                {
                    code: 180,
                    ignoreComments: true,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true,
                    ignoreRegExpLiterals: true
                }
            ],
            'max-lines-per-function': ['warn', 30],
            'no-console': 'error',
            'object-curly-spacing': ['error', 'always'],
            'quotes': ['error', 'single'],
            'quote-props': ['error', 'as-needed'],
            'semi': ['error', 'always'],
            'sort-imports': [
                'error',
                {
                    memberSyntaxSortOrder: ['single', 'all', 'multiple', 'none'],
                    allowSeparatedGroups: true
                }
            ]
        }
    },
    {
        languageOptions: {
            globals: globals.node,
        }
    }
);
