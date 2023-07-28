import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json' assert { type: 'json' }

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      name: pkg.name
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
      name: pkg.name
    }
  ],
  plugins: [
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' })
  ]
}
