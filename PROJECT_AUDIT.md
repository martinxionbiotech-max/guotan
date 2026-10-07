# PROJECT_AUDIT.md — CHARCOAL HUB 项目审计

> 审计日期：2026-10-07。本文件是 CHARCOAL HUB 建设 Prompt V1 的 Phase 1 输出。

## 1. 当前技术栈

**无**。5 个 GitHub 仓库全部为空仓库（0 文件，0 commit）：

| 仓库 | 状态 |
|---|---|
| martinxionbiotech-max/guotan（主站）| 空 |
| martinxionbiotech-max/data.guotan | 空 |
| martinxionbiotech-max/manufacturer.guotan | 空 |
| martinxionbiotech-max/testing.guotan | 空 |
| martinxionbiotech-max/Knowledge.guotan | 空 |

> 注：`knowledge.guotan`（小写 k）与 `Knowledge.guotan` 是同一仓库（GitHub 大小写不敏感），实际共 5 个仓库。

## 2. 当前目录结构

- 本地：`/home/openclaw/guotan/` 下 5 个空克隆目录
- 无 package.json、无 Astro 配置、无任何内容

## 3. 可以复用的模块

- 无项目内模块（绿地项目）
- **可复用的已验证模式**（来自同机其他项目，作为实施参考而非复制）：
  - Astro + Cloudflare Pages 静态构建 + sitemap-index 拆分
  - Content Collections + JSON/YAML 数据分离模式
  - 实体图（Product → Manufacturer → Testing → Specification）跨站互链模式
  - llms.txt + AI crawler robots 策略

## 4. 需要新增的模块

| 模块 | 位置 |
|---|---|
| 主站 Astro 骨架 | guotan/ |
| Content Collections（products/manufacturers/tests/specifications/applications/knowledge）| 各子站 |
| RFQ / Sample 表单架构 | 主站 |
| 实体图与内部链接系统 | 全站 |
| SEO/AIO 基础（schema/sitemap/robots/llms.txt）| 全站 |
| 构建时数据校验（duplicate ID/断引用/缺 source）| data 站 |

## 5. 潜在 SEO 风险（绿地项目，属未来风险）

1. **Programmatic SEO 诱惑**：Prompt 明确禁止"城市+产品"批量页。建设时不得引入批量生成器。
2. **假数据风险**：产品/制造商/测试页不得编造数据；无数据字段一律 null。这是本项目最大的长期风险，也是壁垒所在。
3. **子站重复内容**：主站/data/manufacturer/testing/knowledge 五站职责必须严格分离，禁止同一内容多站发布。

## 6. 潜在架构问题

1. 5 个仓库 = 5 个 Cloudflare Pages 项目，需要 5 套独立部署（或主域 + 4 子域）。子域 DNS 待确认。
2. RFQ/Sample 无后端：第一阶段用 Formspree-ready + mailto 回退，需在 CONVERSION_ARCHITECTURE.md 明确。
3. 域名未定（见 DOMAIN_STRATEGY.md），但仓库命名 guotan 暗示可能用 guotan.com 系子域。

## 7. 推荐实施顺序

严格按 Prompt §45 Build Order：

Phase 1 审计 ✅（本文件）
→ Phase 2 域名策略
→ Phase 3 主站骨架
→ Phase 4-6 数据模型（product/manufacturer/testing）
→ Phase 7 知识架构
→ Phase 8 内链/实体图
→ Phase 9 SEO/AIO
→ Phase 10 转化架构
→ Phase 11 质量门禁
→ Phase 12 部署

## 8. 用户硬性约束（执行时必须遵守）

> **第一阶段不批量写产品内容。** 先完成骨架、数据模型、实体关系、RFQ、SEO/AIO 基础设施。真实供应商数据（3-5 家中国工厂的 25/26mm 产品、灰分、水分、固定碳、燃烧时间、包装、MOQ、检测报告、OEM 条件、产能）由人工采集后灌入。
>
> 因此：content collections 定义严格 schema，但**不写入任何虚构条目**。需要数据渲染的页面如实标注 "data pending — supplier verification in progress"。
