import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'IP Docs',
  description: 'IP 文档站点',
  base: '/ip-docs/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '报告', link: '/ip-docs/html/demo.html', target: '_blank' },
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/guide/' },
          { text: '快速开始', link: '/guide/getting-started' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ymmcn/ip-docs' },
    ],
  },
})
