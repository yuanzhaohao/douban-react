'use strict'

module.exports = {
  srcPath: './src',
  siteAssetsRoot: './gh-pages',
  publishPath: './publish',
  proxyTable: {},
  mockData: false,
  optimizeCommon: {
    'vendor-react': [
      'react',
      'react-dom',
      'react-router-dom'
    ],
    'vendor-redux': [
      'redux',
      'react-redux'
    ],
    'vendor-lib': [
      'classnames',
      'reqwest',
    ],
  },
  host: 'localhost',
  port: 6006,
  autoOpen: true,
  useEslint: false,
  extractStyle: false,
  mockData: true
}
