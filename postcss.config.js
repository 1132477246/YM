module.exports = {
  'plugins': {
    'autoprefixer': {},
    // 'postcss-px-to-viewport': {
    //   'viewportWidth': 1920,
    //   'unitPrecision': 5,
    //   'minPixelValue': 1,
    //   fontViewportUnit: 'rem',
    //   viewportUnit: 'rem',
    //   exclude: [/home_adapter.scss/, /navBar_adapter.scss/, /footer_adapter.scss/, /about-adapter.scss/, /partners-adapter.scss/,
    //     /solution_adapter/, /products_adapter/, /news_adapter/, /newsDetails_adapter/]
    // }
    'postcss-pxtorem': {
      rootValue: 100, // 换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
      propList: ['*'], // 可以从px更改到rem的属性,值需要精确匹配。
      // 1.使用通配符 * 启用所有属性。 示例：['*']
      // 2.在单词的开头或者结尾使用 *。 ( ['*position*'] 将匹配 background-position-y )
      // 3.使用 与属性不匹配。! 示例：['*','letter-spacing']!
      // 4.将"非"前缀与其他前缀合并。 示例：['*','font*']!
      unitPrecision: 5, // 允许REM单位增长到的十进制数字。
      // propWhiteList: [], // 默认值是一个空数组，这意味着禁用白名单并启用所有属性。
      // propBlackList: [], // 黑名单
      // exclude: (file) => {
      //   const ignore = ['home_adapter.scss', 'navBar_adapter.scss', 'footer_adapter.scss', 'about-adapter.scss', 'partners-adapter.scss',
      //     'solution_adapter', 'products_adapter', 'news_adapter', 'newsDetails_adapter']
      //   for (let i = 0; i < ignore.length; i++) {
      //     console.log(ignore[i], file)
      //     if (file.indexOf(ignore[i]) !== -1) {
      //       console.log(ignore[i], file)
      //     }
      //   }
      //   return true
      // }
      exclude: /adapter/i // [/home_adapter.scss/, /navBar_adapter.scss/, /footer_adapter.scss/, /about-adapter.scss/, /partners-adapter.scss/,
      //   /solution_adapter/, /products_adapter/, /news_adapter/, /newsDetails_adapter/] // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
      // selectorBlackList: [], // 要忽略并保留为px的选择器
      // ignoreIdentifier: false, // （boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
      // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
      // mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
      // minPixelValue: 3 // 设置要替换的最小像素值(3px会被转rem)。 默认 0
    }
  }
}
