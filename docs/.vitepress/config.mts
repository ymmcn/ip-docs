import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'IP Docs',
  description: 'IP 文档站点',
  base: '/',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/guide/' },
        ],
      },
      {
        text: '手册',
        items: [
          { text: 'AI时代知识合集', link: '/html/ai-knowledge-summary.html', target: '_blank' },
          { text: '创作者人设手册(初级)', link: '/html/creator-persona-basic.html', target: '_blank' },
          { text: '创作者人设手册(高级)', link: '/html/creator-persona-advanced.html', target: '_blank' },
          { text: '助手使用指南', link: '/html/assistant-guide.html', target: '_blank' },
          { text: '自媒体达人成长手册', link: '/html/media-growth-v1.html', target: '_blank' },
          { text: '自媒体达人成长手册V2', link: '/html/media-growth-v2.html', target: '_blank' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ymmcn/ip-docs' },
    ],
  },
})
