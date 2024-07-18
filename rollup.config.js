const glslify = require('rollup-plugin-glslify')
const terser = require('@rollup/plugin-terser')
const resolve = require('@rollup/plugin-node-resolve')
const serve = require('rollup-plugin-serve')
const livereload = require('rollup-plugin-livereload')
const babel = require('@rollup/plugin-babel')
const path = require('path')
const inDev = process.env.NODE_ENV === 'development'
module.exports = {
    input: path.resolve(__dirname, 'src', 'main.js'),
    output: {
        file: path.resolve(__dirname, 'dist', 'app.js'),
        format: 'esm'
    },
    plugins: [
        glslify(),
        inDev && serve('dist'),
        inDev && livereload(),
        resolve(),
        babel(),
        !inDev && terser()
    ]
}