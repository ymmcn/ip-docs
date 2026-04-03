---
name: add-doc
description: 添加文档到 IP Docs 项目并发布到 GitHub Pages
version: 1.0.0
user-invocable: true
---

# 添加文档到 IP Docs

当用户要求添加文档时，按以下流程操作。

## 项目结构

```
docs/
├── public/html/       ← 静态 HTML 文件存放目录
├── guide/             ← Markdown 指南页面
│   └── index.md
├── index.md           ← 根页面（自动跳转到 /guide/）
└── .vitepress/
    └── config.mts     ← VitePress 配置（导航和侧边栏）
```

## 添加静态 HTML 文件

1. 将 HTML 文件放入 `docs/public/html/` 目录
2. 文件名必须使用**英文小写+连字符**命名，例如 `my-doc-name.html`
3. 如果用户提供的是中文文件名，先重命名为英文
4. 编辑 `docs/.vitepress/config.mts`，在 `sidebar` 的"手册"分组 `items` 数组中添加：
   ```ts
   { text: '中文显示名称', link: '/html/english-filename.html', target: '_blank' },
   ```

## 添加 Markdown 文档

1. 在 `docs/guide/` 下创建 `.md` 文件
2. 编辑 `docs/.vitepress/config.mts`，在 `sidebar` 的"指南"分组 `items` 数组中添加：
   ```ts
   { text: '显示名称', link: '/guide/文件名' },
   ```

## 验证

添加完成后运行 `npm run docs:build` 确认构建成功。

## 发布

1. `git add` 新增和修改的文件
2. `git commit` 提交变更
3. `git push origin main` 推送到远程
4. GitHub Actions 自动构建部署到 `https://docs.ymmcn.vip`

## 注意事项

- `docs/public/` 下的文件构建时原样复制，不经过 VitePress 处理
- 静态 HTML 在侧边栏点击后会在**新标签页**打开（`target: '_blank'`）
- `base` 配置为 `/`，链接路径不需要加项目名前缀
- 不要修改 `docs/index.md`，它负责自动跳转到 `/guide/`
