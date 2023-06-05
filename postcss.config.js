module.exports = {
  'plugins': {
    'autoprefixer': {},
    'postcss-px-to-viewport': {
      'viewportWidth': 1920,
      'unitPrecision': 5,
      'minPixelValue': 1,
      exclude: [/home_adapter.scss/, /navBar_adapter.scss/, /footer_adapter.scss/]
    }
  }
}
