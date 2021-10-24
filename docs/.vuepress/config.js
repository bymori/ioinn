/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-24 20:29:50
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-25 02:48:10
 */
const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: 'io小栈 blog',
  description:
    'web前端技术博客,简洁至上,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github等技术文章。',
  // base: '/ioinn/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    // lineNumbers: false, // 代码行号
  },

  head,
  plugins,
  themeConfig,
};
