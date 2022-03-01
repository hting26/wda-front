const bootstrapSassAbstractsImports = require('vue-cli-plugin-bootstrap-vue/sassAbstractsImports.js')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: bootstrapSassAbstractsImports.join('\n')
      },
      scss: {
        additionalData: [...bootstrapSassAbstractsImports, ''].join(';\n')
      }
    }
  },
  publicPath: './',
  chainWebpack (config) {
    config.plugin('html').tap(args => {
      args[0].title = '購物網'
      return args
    })
  }
}
