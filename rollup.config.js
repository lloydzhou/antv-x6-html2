import { terser } from 'rollup-plugin-terser'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import typescript from '@rollup/plugin-typescript'

export default {
  input: './src/index.ts',
  output: [
    {
      name: 'x6-html2',
      format: 'umd',
      file: 'dist/index.js',
      sourcemap: true,
      globals: {
        '@antv/x6': 'X6',
      },
    }
  ],
  external: ['@antv/x6'],
  plugins: [
    typescript({ declaration: false }),
    resolve(),
    commonjs(),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    terser(),
    filesize(),
  ]
}
