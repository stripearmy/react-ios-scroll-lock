import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/react-ios-scroll-lock.js',
            format: 'cjs',
            exports: 'named',
            sourcemap: false
        },
        {
            file: 'dist/react-ios-scroll-lock.esm.js',
            format: 'esm',
            exports: 'named',
            sourcemap: false
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.json',
            jsx: 'react',
            declaration: true,
            declarationDir: 'dist/types'
        }),
        postcss({
            extract: path.resolve('dist/css/styles.css'),
            minimize: true
        }),
        copy({
            targets: [
                {
                    src: 'src/css/index.js',
                    dest: 'dist/css'
                }
            ]
        }),
        terser()
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime']
};