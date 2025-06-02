import eslint from '@eslint/js';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
    {
        ignores: ['_dev', '.vscode', 'node_modules', 'dist', '.rollup.cache'],
    },
    eslint.configs.recommended,
    ...tsEslint.configs.recommendedTypeChecked,
    ...tsEslint.configs.stylisticTypeChecked,
    {
        plugins: {
            'simple-import-sort': eslintPluginSimpleImportSort,
        },
        rules: {
            'simple-import-sort/imports': 'warn',
            'simple-import-sort/exports': 'warn',
            'no-undef': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/consistent-type-imports': [
                'warn',
                {
                    prefer: 'type-imports',
                    fixStyle: 'inline-type-imports',
                },
            ],
        },
    },
    {
        languageOptions: {
            parserOptions: {
                project: './tsconfig.eslint.json',
            },
        },
    }
);
