import pluginTerser from '@rollup/plugin-terser';
import pluginTypescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

const isProduction = process.env.ROLLUP_WATCH !== 'true';

export default defineConfig({
    input: 'src/index.ts',
    external: [
        '@eslint/js',
        '@stylistic/eslint-plugin',
        'eslint',
        'eslint-plugin-simple-import-sort',
        'eslint-plugin-unused-imports',
        'globals',
        'typescript-eslint',
    ],
    plugins: [
        pluginTypescript({
            tsconfig: './tsconfig.json',
            outputToFilesystem: false,
            sourceMap: !isProduction,
        }),
        isProduction && pluginTerser(),
    ],
    output: [
        {
            file: 'dist/bundle.mjs',
            format: 'es',
            exports: 'auto',
            sourcemap: !isProduction,
        },
        {
            file: 'dist/bundle.cjs',
            format: 'cjs',
            exports: 'auto',
            sourcemap: !isProduction,
        },
    ],
});
