/* eslint-disable indent */
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
const { uniPostcssPlugin } = require('@dcloudio/uni-cli-shared')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
      exclude: ['./node_modules/**'],
      cache: false
    })
  ],
  css: {
    postcss: {
      plugins: [
        require('postcss-import')({
          resolve(id, basedir, importOptions) {
            if (id.startsWith('~@/')) {
              return path.resolve(process.env.UNI_INPUT_DIR, id.substr(3))
            } else if (id.startsWith('@/')) {
              return path.resolve(process.env.UNI_INPUT_DIR, id.substr(2))
            } else if (id.startsWith('/') && !id.startsWith('//')) {
              return path.resolve(process.env.UNI_INPUT_DIR, id.substr(1))
            }
            return id
          }
        }),
        require('tailwindcss')(),
        // Different styles are processed according to platform differences
        ...(process.env.UNI_PLATFORM !== 'h5'
          ? [
              // Use postcss-class-name The package converts the class name not supported by the applet to the supported class name
              require('postcss-class-rename')({
                '\\\\:': '--',
                '\\\\/': '--',
                '\\\\.': '--',
                // '.:': '--',
                '\\*': '--'
              }),
              require('css-byebye')({
                rulesToRemove: [/\*/],
                map: false
              })
            ]
          : []),
        /* ******* */
        uniPostcssPlugin(),
        require('autoprefixer')({
          remove: true
        })
      ]
    }
  }
})
