/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-24 20:29:50
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-24 22:46:01
 */
module.exports = {
  title: 'io小栈',
  description:
    '沫沫写博客的地方,前端技术博客,简洁至上，专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github等技术文章。',
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  //   ['link', { rel: 'icon', href: '/img/favicon.ico' }],
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
    ['meta', { name: 'author', content: 'io小栈' }],
    [
      'meta',
      {
        name: 'keywords',
        content:
          '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown,ioinn,io小栈,沫沫,demo',
      },
    ],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/about.md' },
      { text: '关于md', link: '/abouts/' },
      { text: 'css', link: '/css/' },
      { text: 'java', link: '/java/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      '/css/': ['a-css', 'b-css', 'c-css'],
      '/java/': ['a-java', 'b-java', 'c-java'],
    },
    // sidebar: 'auto',
    // sidebar: [
    //   {
    //     title: 'Group 1', // 必要的
    //     path: '/css/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1, // 可选的, 默认值是 1
    //     children: ['/css/a-css', '/css/b-css', '/css/c-css'],
    //   },
    //   {
    //     title: 'Group 2',
    //     path: '/java/',
    //     children: ['/java/a-java', '/java/b-java', '/java/c-java'],
    //     initialOpenGroupIndex: -1, // 可选的, 默认值是 0
    //   },
    // ],
    lastUpdated: '上次修改', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  },
};
