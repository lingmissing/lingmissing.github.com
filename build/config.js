'use strict'

module.exports = {
  port: '5003',
  title: '时光的涂鸦墙',
  vendor: [
    'vue',
    'vue-router'
  ],
  postcss: [
    require('postcss-cssnext')({
      browsers: ['last 2 versions', 'ie > 8']
    })
  ],
  cssModules: false
}
