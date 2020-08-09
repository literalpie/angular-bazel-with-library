import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

module.exports = {
  plugins: [
    resolve({
      mainFields: ['browser', 'es2015', 'module', 'jsnext:main', 'main'],
    }),
    commonjs(),
  ],
};
