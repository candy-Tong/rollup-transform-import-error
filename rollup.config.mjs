import { defineConfig } from 'rollup';

export default [
    defineConfig({
        input: 'src/index.js',
        external: [
            './abc'
        ],
        output: {
            file: 'src/dist/index.js',
            format: 'cjs',
            interop: 'auto'
        }
    }),
    // defineConfig({
    //     input: 'src/abc.js',
    //     output: {
    //         file: 'src/dist/abc.js',
    //         format: 'cjs',
    //     }
    // })
]