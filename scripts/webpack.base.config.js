'use strict'

const path = require('path');
const exists = require('fs').existsSync;
const utils = require('./utils');
const config = require('./config');
const srcPath = utils.resolve(config.srcPath);
const entry = utils.getEntry(path.join(srcPath, './entry'));
const vendors = config.optimizeCommon && typeof config.optimizeCommon === 'object'
  ? config.optimizeCommon
  : {};

const createLintingRule = () => ({
  test: /\.(js|ts|tsx)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [srcPath],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: true
  }
});

const createHappypackPlugin = () => {
  const os = require('os')
  const HappyPack = require('happypack')
  const threadPool = HappyPack.ThreadPool({
    size: os.cpus().length
  })
  const createHappypack = (id, loaders) => {
    return new HappyPack({
      id,
      loaders,
      threadPool
    })
  }

  return [
    createHappypack('js', [{
      path: 'babel-loader',
      query: {
        cacheDirectory: '.happypack_cache'
      }
    }]),
    createHappypack('ts', [{
      path: 'ts-loader',
      query: {
        happyPackMode: true
      }
    }]),
  ]
}

const createHtmlPlugin = () => {
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  let defaultTplPath = path.join(srcPath, './template.html');
  return Object.keys(entry).map(page => {
    let pageTplPath = path.join(srcPath, `./${page}.html`);
    let templatePath = defaultTplPath;
    let chunks = Object.keys(vendors).concat(page);

    if (exists(pageTplPath)) templatePath = pageTplPath;

    return new HtmlWebpackPlugin({
      filename: `${page}.html`,
      template: templatePath,
      inject: 'body',
      chunksSortMode: 'dependency',
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
      chunks,
    })
  })
}

module.exports = {
  entry: Object.assign({}, entry, vendors),
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json', '.css', '.scss', '.svg', '.md'],
    alias: {
      '@': srcPath
    }
  },
  resolveLoader: {
    modules: [
      utils.resolve('node_modules'),
    ]
  },
  plugins: [
    ...(createHappypackPlugin()),
    ...(createHtmlPlugin()),
  ],
  module: {
    rules: [
      ...(config.useEslint ? [createLintingRule()] : []),
      {
        test: /\.js$/,
        loader: 'happypack/loader?id=js',
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'happypack/loader?id=ts',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      },
    ]
  },
  stats: {
    errors: true,
    warnings: false
  }
}
