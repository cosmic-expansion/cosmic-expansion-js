// rollup.config.js

import { readFileSync } from 'fs';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import camelCase from 'camelcase';
import { terser } from 'rollup-plugin-terser';

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

const input = 'src/index.ts';

// Human timestamp for banner.
const datetime = new Date().toISOString().substring(0, 19).replace('T', ' ');

// Banner.
const banner = `/*! ${pkg.name} v${pkg.version} ${datetime}
 *  ${pkg.homepage}
 *  Copyright ${pkg.author} ${pkg.license} license.
 */
`;

export default [
  // iife build for browser.
  {
    input,

    output: [
      {
        format: 'iife',
        banner,
        name: camelCase(pkg.name, { pascalCase: true }),
        file: pkg.browser.replace('.min', ''),
        sourcemap: true,
      },
    ],

    plugins: [nodeResolve(), typescript()],
  },
  // Minified iife build for browser.
  {
    input,

    output: [
      {
        format: 'iife',
        banner,
        name: camelCase(pkg.name, { pascalCase: true }),
        file: pkg.browser,
        sourcemap: true,
      },
    ],

    plugins: [nodeResolve(), typescript(), terser()],
  },
  // Common JS build for require().
  {
    input,

    output: [
      {
        format: 'cjs',
        banner,
        file: 'dist/index.cjs',
        sourcemap: true,
      },
    ],

    plugins: [nodeResolve(), typescript()],
  },
  // Common JS build for require().
  {
    input,

    output: [
      {
        format: 'es',
        banner,
        file: 'dist/index.js',
        sourcemap: true,
      },
    ],

    plugins: [nodeResolve(), typescript()],
  },
];
