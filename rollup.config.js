import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import merge from 'deepmerge'
import pkg from './package.json'

const UMD = pkg.browser
const ESM = pkg.browser.replace(/\bumd\b/, 'esm')

const base = {
  input: 'src/index.ts',
  output: {
    freeze: false,
    interop: false,
    sourcemap: true
  },
  plugins: [
    typescript({
      clean: true,
      tsconfigOverride: {
        compilerOptions: {
          module: 'esnext',
          sourceMap: true,
          declaration: false,
          declarationMap: false,
          removeComments: true
        }
      }
    })
  ]
}

const min = {
  plugins: [
    terser({
      ecma: 8,
      compress: {
        unsafe: true,
        unsafe_arrows: true,
        unsafe_comps: true,
        unsafe_Function: true,
        unsafe_math: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
        pure_getters: true
      }
    })
  ]
}

const umd = merge(base, {
  output: {
    format: 'umd',
    file: UMD,
    name: pkg.name
  }
})

const esm = merge(base, {
  output: {
    format: 'esm',
    file: ESM
  }
})

const umdMin = merge.all([umd, min, {
  output: {
    file: UMD.replace(/js$/, 'min.js')
  }
}])

const esmMin = merge.all([esm, min, {
  output: {
    file: ESM.replace(/js$/, 'min.js')
  }
}])

export default !process.env.ROLLUP_WATCH
  ? [ esm, umd, esmMin, umdMin ]
  : [ esm, umd ]
