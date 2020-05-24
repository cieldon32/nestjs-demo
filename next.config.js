const withSass = require('@zeit/next-sass');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = withSass({
  cssModules: false
})