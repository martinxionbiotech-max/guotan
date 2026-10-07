# SEO_AIO_ARCHITECTURE.md — SEO / AIO 架构

> 2026-10-07。五站统一 SEO/AIO 基础。

## 已实现（§20）

- SSG 可抓取：纯静态输出
- canonical：每页自动（sitemap-integration）
- sitemap-index.xml：构建生成
- robots.txt：AI crawler 友好（GPTBot/ChatGPT-User/OAI-SearchBot/ClaudeBot/PerplexityBot 全 Allow）
- OpenGraph：全页
- JSON-LD：Organization / WebSite / BreadcrumbList / Article / Dataset（data 站）/ FAQPage（仅真实 FAQ 页）
- llms.txt：主站 + Knowledge 站（AI 可读入口）
- AI 提取友好（§37）：产品页顶部 Quick Facts 块（Product/Raw Material/Application/Size/Ash/Moisture/Fixed Carbon/Burning Time/MOQ/OEM/Manufacturer/Verification）→ 待产品数据灌入后激活

## 页面级规范

- title/description/H1 唯一性
- 每页 1 个 H1，语义化 h2/h3
- 禁止无意义 schema（不为 AIO 加假结构）

## 未来观察项

- 域名占位替换为真实域名后重跑 GSC
- AI crawler 抓取日志观察
