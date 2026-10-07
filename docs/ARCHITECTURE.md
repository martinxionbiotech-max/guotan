# ARCHITECTURE.md — CHARCOAL HUB 架构

> 2026-10-07。五站架构：主站商业转化 + 4 数据子站。

## 站点矩阵

| 仓库 | 域名（占位）| 职责 | 状态 |
|---|---|---|---|
| guotan | guotan.com | 商业转化 + Lead Gen | ✅ 19 页骨架 |
| data.guotan | data.guotan.com | 产品/规格数据库 | ✅ 6 规格页 + schema |
| manufacturer.guotan | manufacturer.guotan.com | 供应商情报 | ✅ schema + 索引 |
| testing.guotan | testing.guotan.com | 检测方法学 | ✅ 7 测试页 |
| Knowledge.guotan | knowledge.guotan.com | 买方教育 | ✅ 8 cornerstone |

## 技术栈

- Astro 静态生成（SSG）
- Content Collections（zod schema 构建时校验）
- Cloudflare Pages 部署（SITE_URL 环境变量可覆盖域名占位）
- Formspree-ready 表单 + mailto 回退

## 目录结构（主站）

```
src/
├── content/          # collections（子站）
├── components/
├── layouts/
├── pages/            # 19 页面
├── lib/              # sites.ts 跨站链接常量
└── data/             # 站点配置
```

## 跨站链接

`sites.ts` 定义五站 URL 常量，所有跨站互链走常量不硬编码。实体方向（§21/§43）：

Product → Raw Material → Application → Specification → Manufacturer → Testing → Packaging → OEM

## 数据流

真实供应商数据（人工采集 3-5 家工厂）→ 灌入 data/manufacturer/testing collections → 构建时 zod 校验 → 静态产物。

第一阶段 collections 为空（.gitkeep 占位），页面显示 "data pending — supplier verification in progress"。

## 部署

- 每仓库独立 CF Pages 项目，绑定对应子域
- 构建命令 `npm run build`，输出 `dist/`
- SITE_URL 部署时按真实域名注入（本地默认 guotan.com 占位）
