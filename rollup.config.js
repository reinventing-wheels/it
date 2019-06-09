import { terser } from 'rollup-plugin-terser'
import cleanup from 'rollup-plugin-cleanup'
import resolve from 'rollup-plugin-node-resolve'
import sourcemaps from 'rollup-plugin-sourcemaps'
import merge from 'deepmerge'
import pkg from './package.json'

const ESM = pkg.browser.replace(/\bumd\b/, 'esm')
const UMD = pkg.browser

//

const base = {
  input: pkg.module,
  output: {
    freeze: false,
    interop: false,
    sourcemap: true
  },
  plugins: [
    resolve(),
    sourcemaps()
  ]
}

const dev = {
  plugins: [
    cleanup()
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

//

const esm = merge(base, {
  output: {
    format: 'esm',
    file: ESM
  }
})

const umd = merge(base, {
  output: {
    format: 'umd',
    file: UMD,
    name: pkg.name
  }
})

//

const esmDev = merge(esm, dev)
const esmMin = merge(merge(esm, min), {
  output: {
    file: ESM.replace(/(?=js$)/, 'min.')
  }
})

const umdDev = merge(umd, dev)
const umdMin = merge(merge(umd, min), {
  output: {
    file: UMD.replace(/(?=js$)/, 'min.')
  }
})

//

export default !process.env.ROLLUP_WATCH
  ? [ esmDev, umdDev, esmMin, umdMin ]
  : [ esmDev, umdDev ]
