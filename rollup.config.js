import { terser } from 'rollup-plugin-terser'
import cleanup from 'rollup-plugin-cleanup'
import resolve from 'rollup-plugin-node-resolve'
import sourcemaps from 'rollup-plugin-sourcemaps'
import pkg from './package.json'

const DEV = process.env.ROLLUP_WATCH
const ESM = pkg.module
const UMD = pkg.main

const baseOutput = {
  freeze: false,
  interop: false,
  sourcemap: true,
  preferConst: true
}

const basePlugins = [
  resolve(),
  sourcemaps()
]

const dev = {
  input: 'dist/esm',
  output: [
    { ...baseOutput, format: 'esm', file: ESM },
    { ...baseOutput, format: 'umd', file: UMD, name: pkg.name }
  ],
  plugins: [
    ...basePlugins,
    cleanup()
  ]
}

const min = {
  input: pkg.module,
  output: dev.output.map(({ file, ...rest }) => ({
    ...rest,
    file: file.replace(/(?=js$)/, 'min.')
  })),
  plugins: [
    ...basePlugins,
    terser({
      ecma: 8,
      compress: {
        hoist_funs: true,
        hoist_vars: true,
        pure_getters: true,
        unsafe: true,
        unsafe_arrows: true,
        unsafe_comps: true,
        unsafe_Function: true,
        unsafe_math: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true
      }
    })
  ]
}

export default DEV ? dev : [dev, min]
