// const CracoLessPlugin = require('craco-less')
const CracoAntdLessPlugin = require('./craco-antd-less')
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
  plugins: [
    {
      plugin: CracoAntdLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        },
        cssLoaderOptions: {
          modules: {
            localIdentName: '[local]_[hash:base64:5]'
          }
        }
      }
    }
  ],
  webpack: {
    configure: (config, options) => {
      config.module.rules.push({
        test: /\.(jsx|tsx|js|ts)/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory({
              libraryName: 'antd',
              libraryDirectory: 'lib',
              style: true
            })]
          })
        },
        exclude: /node_modules/
      })

      return config
    }
  }
}
