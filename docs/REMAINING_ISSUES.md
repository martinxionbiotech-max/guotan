# REMAINING_ISSUES.md — 遗留问题与阻塞项

> 2026-10-09 审计批次。未在本批次修复的问题，按优先级排列。

## P0 阻塞：正式域名 guotan.com 系不可用

**实测（2026-10-09 04:05 UTC）**：

| 检查 | 结果 |
|---|---|
| guotan.com NS | julia.dnspod.net / ash.dnspod.net（DNSPod） |
| guotan.com A | 203.12.200.78（apex / www / 通配子域均指向同 IP） |
| https://guotan.com | 000 — TLS "unrecognized name"（服务器不提供该域证书） |
| http://guotan.com | 200 — 返回中文维护页（非本站内容） |
| https://data.guotan.com | 000 — 同上 TLS 错误 |
| canonical（五站） | 全部指向 https://*.guotan.com |
| sitemap（五站） | 全部指向 https://*.guotan.com |

**影响**：搜索引擎与 AI 爬虫抓取 pages.dev 时会看到 canonical 指向不可达域名，可能不收录或收录后失效；sitemap 声明的 URL 全部打不开。

**本批次处理**：按红线**未改 DNS、未改 canonical 为 pages.dev**。已如实记录（CONTENT_AUDIT.md §5）。

**业主需要做的**（我们不做，等指示）：
1. 确认 guotan.com 域名控制权（Cloudflare Pages 自定义域需要 DNS 验证）
2. 在 Cloudflare Pages 五个项目添加自定义域（guotan.com 及各子域）
3. 确保 DNSPod 的 A/CNAME 记录与 Pages 要求一致，TLS 证书由 CF 自动签发后验证 https 200
4. 验证后五站 canonical/sitemap 无需改动（已预指向正式域名）

## P1：knowledge.guotan（小写）空仓库

/home/openclaw/guotan/knowledge.guotan 是空 git 仓库（仅 .git）。GitHub 大小写不敏感，与 Knowledge.guotan 实际同一仓库。建议业主在 GitHub 删除/归档该本地残留目录，避免混淆。（本批次未删除，属 owner 决策项。）

## P2：types 集合为空

data.guotan/src/content/types/ 目录为空（仅 .gitkeep）。types 页以"结构说明"形式存在。待有真实数据后再填充；页面文案需保持"尚无已发布条目"的诚实状态（本批次阶段 1 已核对该页 verified 表述）。

## P3：testing.guotan reports 页

reports/index.astro 为"数据待发布"状态。检测报告数据源（可追溯报告编号）需业主提供，无数据不填充。

## 工具说明

Firecrawl 工具在本会话不可用；所有线上验证以 curl + web_fetch 完成，结果如上。没有伪装任何"已修复"的域名状态。
