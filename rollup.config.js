import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'
import nodeGlobals from 'rollup-plugin-node-globals'

const packageJson = require('./package.json');

const globals = {
    ...packageJson.devDependencies,
}

export default {
    input: 'app.ts',
    output: {
        dir: 'dist',
    },
    plugins: [
      peerDepsExternal(),
      resolve({
            preferBuiltins: true
      }),
      typescript({
            useTsconfigDeclarationDir: true,
      }),
      commonjs({
            exclude: 'node_modules',
            ignoreGlobal: true,
            extensions: ['.js', '.ts']
      }),
      json(),
      nodeGlobals(),
    ],
    external: Object.keys(globals),
  }