const { defineConfig } = require('@vue/cli-service')
const path = require('path'); // 引入path模块
module.exports = defineConfig({
  publicPath: './', // 添加这一行来设置静态文件路径
  transpileDependencies: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less', // or 'scss', or 'stylus'
      patterns: [path.resolve(__dirname, './src/assets/less/global.less')] // 添加global.less的路径
    }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          /* less 变量覆盖，用于自定义 ant design 主题 自定义属性必须在这里进行定义和初始化*/
          'primary-color': '#1890FF',
          'primary-logo-color': '#1890FF',
        },
        javascriptEnabled: true,
      },
    }
  },
})
