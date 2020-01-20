const { resolve } = require('path')
const { compilerOptions } = require('./tsconfig.json')

const createBundleReportPlugin = () => ({
  resolve: '@poi/bundle-report',
  options: {
    openAnalyzer: false,
    analyzerMode: 'static',
    reportFilename: resolve(__dirname, '../web-report.html')
  }
})

const extractTSPaths = () => {
  const { baseUrl = '', paths } = compilerOptions
  const replaceWildCard = val => val.replace('/*', '')

  if (!paths || paths.length === 0) {
    return []
  }

  return Object.entries(paths).map(([ key, [ val ] ]) => ({
    key: replaceWildCard(key),
    path: resolve(__dirname, baseUrl, replaceWildCard(val))
  }))
}

module.exports = {
  plugins: [
    createBundleReportPlugin()
  ],
  chainWebpack: config => {
    extractTSPaths().forEach(({ key, path }) => config.resolve.alias.set(key, path))
  }
}
