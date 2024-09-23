const { defineConfig } = require('@vue/cli-service')
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/styles/variables.scss";`
      },
      scss: {
        additionalData: `@import "~@/styles/variables.scss";`
      }
    }
  },
  configureWebpack: {
    plugins: [
      new VueLoaderPlugin(),
      new webpack.DefinePlugin({
        '__VUE_OPTIONS_API__': JSON.stringify(true),
        '__VUE_PROD_DEVTOOLS__': JSON.stringify(false),
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false)
      })
    ]
  }
})