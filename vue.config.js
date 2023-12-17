const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'docs',
  productionSourceMap: false,
  lintOnSave: false,
  plugins: [
    require('flowbite/plugin'),
    require('flowbite/plugin-windicss'),
    require('font-awesome/css/font-awesome')
  ],
  content: [
    "./node_modules/flowbite/**/*.js",
    "./node_modules/font-awesome/**/*.css"
  ]
})
