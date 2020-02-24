module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/starnavi-test/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/styles/globalVars.scss";'
      }
    }
  }
}
