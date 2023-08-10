const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './', // 添加这一行来设置静态文件路径
  transpileDependencies: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss', // or 'less', or 'stylus'
      patterns: [] // Here you can add the paths to your global style files
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
