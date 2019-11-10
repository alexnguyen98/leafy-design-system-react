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
import cssnano from 'cssnano'
import analyze from 'rollup-plugin-analyzer'
import postCssModules from 'postcss-modules'

export default [
  {
    input: 'src/components/index.js',
    output: {
      name: 'index',
      file: 'dist/index.js',
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
        extract: 'dist/style.min.css',
        modules: true,
        use: ['sass'],
        plugins: [
          postCssModules({
            generateScopedName: '[hash:base64:1]'
          }),
          simplevars(),
          nested(),
          cssnext({ warnForDuplicates: false, }),
          cssnano(),
        ]
      })
    ],
    external: ['react','react-dom','classnames'],
  }
]