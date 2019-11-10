import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import reactSvg from 'rollup-plugin-react-svg'
import postcss from 'rollup-plugin-postcss'
import simplevars from 'postcss-simple-vars'
import nested from 'postcss-nested'
import cssnext from 'postcss-cssnext'
import analyze from 'rollup-plugin-analyzer'
import svgr from '@svgr/rollup'

export default [
  {
    input: 'src/components/index.js',
    output: {
      name: 'index',
      file: 'thylakoid/index.js',
      format: 'umd',
      globals: {
        react: 'React',
        classnames: 'classnames',
      }
    },
    plugins: [
      analyze(),
      peerDepsExternal(),
      babel({ exclude: 'node_modules/**' }),
      resolve(),
      commonjs(),
      terser({
        output: {
          comments: false
        }
      }),
      reactSvg(),
      postcss({
        extract: 'thylakoid/style.min.css',
        modules: {
          generateScopedName: '[hash:base64:4]'
        },
        minimize: true,
        use: ['sass'],
        plugins: [
          simplevars(),
          nested(),
          cssnext({ warnForDuplicates: false, }),
        ]
      })
    ],
    external: ['react','react-dom','classnames'],
  },
  {
    input: 'thylakoid-icons/index.js',
    output: {
      file: 'thylakoid-icons/index.js',
      format: 'cjs',
    },
    plugins: [
      svgr(),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.js','.svg'],
      })
    ]
  }
]