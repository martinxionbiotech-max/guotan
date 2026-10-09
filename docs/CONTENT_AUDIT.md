# CONTENT_AUDIT.md — CHARCOAL HUB 五站内容审计

> 审计日期：2026-10-09（执行批次：12:05 北京时间定时任务）
> 范围：guotan / data.guotan / Knowledge.guotan / manufacturer.guotan / testing.guotan（knowledge.guotan 小写为空仓库，不纳入）

## 1. 审计基线（阶段 0 复验）

| 站 | pages.dev 线上 | 基线 commit | 审计前状态 |
|---|---|---|---|
| guotan.pages.dev | 200 | 8e0d32b | 干净工作树 |
| data-guotan.pages.dev | 200 | fb240cf | 干净工作树 |
| knowledge-guotan.pages.dev | 200 | d94d0d1 | 干净工作树 |
| manufacturer-guotan.pages.dev | 200 | 4675be0 | 干净工作树 |
| testing-guotan.pages.dev | 200 | cf542d4 | 干净工作树 |

## 2. 已确认矛盾清单（阶段 1 输入）

| # | 站 | 矛盾 | 事实 |
|---|---|---|---|
| 1 | data | 首页 2 处 "collections defined but empty / intentionally empty" | products 集合实际 3 条（25/26/27mm） |
| 2 | data | applications/packaging/sizes 索引页空状态 | 实际 2/2/3 条记录 |
| 3 | data | types 页 verified 表述 | 实际为 supplier-declared 级记录 |
| 4 | manufacturer | 首页 3 处 "empty by design" | 实际 9 家档案（1 Verified + 3 Supplier Reported + 5 Unverified） |
| 5 | testing | 方法计数口径（曾误数 14） | tests.ts 实际 12 个方法条目（slug 行含类型定义行被误计） |
| 6 | Knowledge | 首页硬编码 "Eight cornerstone guides" | 实际 24 篇文章 |
| 7 | 全站 | empty/verified/certified 等状态词与强声明 | grep 确认 data 首页与主站 site-config 有强声明需逐处核实 |

## 3. 证据模型（阶段 2）

六级证据维度（见 EVIDENCE_AND_STATUS_SCHEMA.md）：

- A 未核验资料
- B 供应商自述
- C 已核验文件
- D 已核验企业身份
- E 已核验产品或工厂能力
- F 有可追溯报告的第三方检测

现有四级 verification 状态映射：

| 现有状态 | 六级映射 |
|---|---|
| unverified | A |
| supplier-reported | B |
| document-verified | C |
| fbo-verified | D |
| third-party-tested | F（有可追溯报告时） |
| Verified（manufacturer 枚举） | D–E 区间，按档案实际证据定位 |
| Third-Party Verified | F（有可追溯报告时） |

边界规则（写入 schema）：
- 身份核验 ≠ 质量证明
- 营业资料 ≠ 工厂能力
- 供应商报告 ≠ 平台独立验证

## 4. 主题矩阵（阶段 3）

详见 SITE_CONTENT_MATRIX.md。13 主题：灰分/水分/固定碳/挥发分/燃烧时间/尺寸公差/供应商核验/产品比较/检测报告/运输安全/包装/认证/采购流程。

## 5. 技术 SEO 现状（阶段 4 实测）

| 检查项 | 结果 |
|---|---|
| 5 × pages.dev 线上 | 全部 200 |
| robots.txt | 5 站全部正常（AI 爬虫友好策略） |
| sitemap-index.xml | 5 站全部 200 |
| canonical | 全部指向 guotan.com 系正式域名（**该域名不可用，见下**） |
| guotan.com DNS | dnspod NS（julia/ash.dnspod.net），A 记录 203.12.200.78（apex/www/通配子域同 IP） |
| https://guotan.com | **000 — TLS "unrecognized name"（该 IP 无此 SNI 证书）** |
| http://guotan.com | 200，返回中文维护页（非本站内容） |
| https://data.guotan.com 等子域 | 同样 TLS 000 |

**结论**：正式域名 guotan.com 系当前不可用于生产（DNS 指向的服务器不服务该域名）。五站 canonical 与 sitemap 均指向正式域名，搜索引擎抓取 pages.dev 时会遇到 canonical 指向不可达域名的矛盾。**按红线：不改 DNS、不改 canonical 为 pages.dev**，此问题列为阻塞项，需业主在 Cloudflare Pages 配置自定义域并确保 DNS/TLS 就绪后解决。详见 REMAINING_ISSUES.md。

## 6. 红线执行记录

- 未编造任何企业/产品/检测/认证事实
- 未改 DNS / 域名绑定
- 未删除任何 URL
- 每站 build 通过后才 push（阶段 1–3 子会话执行，本会话核验）
- Firecrawl 不可用：线上验证全部用 curl/web_fetch 完成（本文件如实记录）
