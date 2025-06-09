import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import { config, ConfigArray } from 'typescript-eslint';

/**
 * Import rules.
 */
export const imports: ConfigArray = config(
    {
        plugins: {
            'unused-imports': unusedImports,
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'unused-imports/no-unused-imports': 'warn',
            'simple-import-sort/imports': [
                'warn',
                {
                    groups: [
                        /**
                         * Side effect imports
                         * */
                        ['^\\u0000'],
                        /**
                         * External libraries (regular packages and scoped packages, but exclude our aliases)
                         */
                        ['^[^@.]', '^@(?!models/|tests/|/)'],
                        /**
                         * @models/* aliases
                         */
                        ['^@models/'],
                        /**
                         * @tests/* aliases
                         */
                        ['^@tests/'],
                        /**
                         * @/ aliases
                         */
                        ['^@/'],
                    ],
                },
            ],
            'simple-import-sort/exports': 'warn',
        },
    }
);
