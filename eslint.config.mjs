import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
    {
        ignores: ['.rollup.cache', '.vscode', 'dist', 'docs', 'node_modules']
    },
    eslint.configs.recommended,
    tsEslint.configs.recommendedTypeChecked,
    tsEslint.configs.stylisticTypeChecked,
    stylistic.configs.customize({
        semi: true,
        indent: 4,
        quotes: 'single',
        commaDangle: 'only-multiline',
    }),
    {
        plugins: {
            'unused-imports': unusedImports,
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'unused-imports/no-unused-imports': 'warn',
            'simple-import-sort/imports': 'warn',
            'simple-import-sort/exports': 'warn',
            'no-console': 'error',
        },
    },
    {
        languageOptions: {
            globals: globals.node,
            parserOptions: {
                project: './tsconfig.eslint.json',
            },
        },
    },
);
