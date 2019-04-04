'use strict';

const fs = require('fs')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const portfinder = require('portfinder')
const openBrowser = require('react-dev-utils/openBrowser')
const utils = require('./utils')
const config = require('./config')
const webpackConfig = require('./webpack.dev.config')

const HOST = config.host
const PORT = config.port
const URI = `http://${HOST}:${PORT}/`

const app = express()
const compiler = webpack(webpackConfig)
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  quiet: true,
})

app.use('/static', express.static(
  path.join(utils.resolve(config.sitePath), './static')
))
app.use(require('connect-history-api-fallback')())
app.use(devMiddleware)

utils.log('starting dev server...')
devMiddleware.waitUntilValid(function() {
  const uri = `${URI}index.html`

  utils.success(`Listening at ${uri}\n`)
  openBrowser(uri);
})

portfinder.basePort = PORT
portfinder.getPort((err, port) => {
  if (err) {
    throw err
  }

  app.listen(port)
})
