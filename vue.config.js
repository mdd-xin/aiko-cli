const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '@coms':resolve('src/components'),
        '@styles':resolve('src/styles'),
        '@apis':resolve('src/apis'),
        '@assets':resolve('src/assets'),
        '@router':resolve('src/router'),
        '@store':resolve('src/store'),
        '@utils':resolve('src/utils'),
        '@views':resolve('src/views')
      }
    }
  },
  devServer: {
		port: process.env.VUE_APP_CLI_PORT,
		open: true,
		hot: true,
    host: 'localhost',
		proxy: {
			[process.env.VUE_APP_BASE_API]: { // 需要代理的路径   例如 '/api'
				target: `${process.env.VUE_APP_BASE_PATH}/`, // 代理到 目标路径
				changeOrigin: true,
				pathRewrite: { // 修改路径数据
					['^' + process.env.VUE_APP_BASE_API]: '' // 举例 '^/api:""' 把路径中的/api字符串删除
				}
			}
		}
	},
  lintOnSave:false,  //关闭eslint语法检查
  transpileDependencies: true
})
