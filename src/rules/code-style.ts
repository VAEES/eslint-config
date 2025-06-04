import stylisticEslintPlugin from '@stylistic/eslint-plugin';
import { config, ConfigArray } from 'typescript-eslint';

/**
 * Code style rules.
 *
 * @see https://eslint.style/rules
 */
export const codeStyle: ConfigArray = config(
    stylisticEslintPlugin.configs.customize({
        semi: true,
        indent: 4,
        quotes: 'single',
        commaDangle: 'only-multiline',
    }),
    {
        plugins: {
            '@stylistic': stylisticEslintPlugin,
        },
        rules: {
            '@stylistic/array-bracket-newline': ['error', 'consistent'],
            '@stylistic/array-element-newline': ['error', 'consistent'],
            '@stylistic/arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
            '@stylistic/curly-newline': ['error', { minElements: 1 }],
            '@stylistic/object-curly-newline': ['error', {
                ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
                ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
                ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
                ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
            }],
            '@stylistic/max-len': ['error', {
                code: 120,
                tabWidth: 4,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            }],
            '@stylistic/quotes': ['error', 'single', {
                avoidEscape: true,
                allowTemplateLiterals: true,
            }],
            '@stylistic/comma-dangle': ['error', 'only-multiline'],
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/indent': ['error', 4, { SwitchCase: 1 }],
            '@stylistic/comma-spacing': ['error', { before: false, after: true }],
            '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],
            '@stylistic/object-curly-spacing': ['error', 'always'],
            '@stylistic/array-bracket-spacing': ['error', 'never'],
            '@stylistic/space-before-blocks': ['error', 'always'],
            '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
            '@stylistic/space-infix-ops': 'error',

            'curly': ['error', 'all'],
            'max-lines-per-function': ['warn', 30],
        },
    }
);
