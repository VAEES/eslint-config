import pluginTerser from '@rollup/plugin-terser';
import pluginTypescript from '@rollup/plugin-typescript';
import { createRequire } from 'module';
import { defineConfig } from 'rollup';

const require = createRequire(import.meta.url);

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const pkg = require('./package.json');

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const { name, version, author, license } = pkg;

const banner = `/*!
 * ${name} v${version}
 * (c) ${author}
 * Released under the ${license} License
 */`;

const isProduction = process.env.ROLLUP_WATCH !== 'true';

export default defineConfig({
    input: 'src/index.ts',
    external: [
        '@eslint/js',
        '@stylistic/eslint-plugin',
        'eslint',
        'eslint-plugin-prettier',
        'eslint-plugin-simple-import-sort',
        'eslint-plugin-unused-imports',
        'globals',
        'prettier',
        'typescript-eslint',
    ],
    plugins: [
        pluginTypescript({
            tsconfig: './tsconfig.json',
            declaration: true,
            declarationDir: './dist',
            outputToFilesystem: true,
            sourceMap: !isProduction,
        }),
        ...(isProduction
            ? [pluginTerser({ format: { preamble: banner } })]
            : []),
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
