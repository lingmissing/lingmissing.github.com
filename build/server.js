'use strict'
const path = require('path')
const express = require('express')
const webpack = require('webpack')

const webpackConfig = require('./webpack.dev')
const config = require('./config')

const app = express()

webpackConfig.entry.client = [
  'webpack-hot-middleware/client',
  webpackConfig.entry.client
]

const compiler = webpack(webpackConfig)

const devMiddleWare = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
})
app.use(devMiddleWare)
app.use(require('webpack-hot-middleware')(compiler))

app.get('*', (req, res) => {
  const fs = devMiddleWare.fileSystem
  devMiddleWare.waitUntilValid(() => {
    const html = fs.readFileSync(path.join(webpackConfig.output.path, './index.html'))
    res.end(html)
  })
})

app.listen(config.port, () => {
  console.log(`Listening at http://localhost:${config.port}`)
})
