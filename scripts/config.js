'use strict'

module.exports = {
  srcPath: './src',
  distPath: './dist',
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
  host: 'test.m.douban.com',
  port: 6006,
  autoOpen: true,
  useEslint: false,
  extractStyle: false
}
