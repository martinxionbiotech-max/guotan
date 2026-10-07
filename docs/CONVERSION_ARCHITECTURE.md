# CONVERSION_ARCHITECTURE.md — 转化架构

> 2026-10-07。§23/§24/§25。

## RFQ 表单（/request-quote/）

字段：Name / Company / Email / Country / Buyer Type（Importer、Distributor、Wholesaler、Hookah Lounge、BBQ Distributor、Retail Brand、Private Label Brand、Other）/ Product / Size / Quantity / Packaging / Private Label / Destination Port / Message

## Sample 表单（/request-sample/）

字段：Product / Size / Quantity / Country / Company / Application / Comments

## 提交机制（无后端第一阶段）

- **Formspree-ready**：表单 action 为可配置端点，部署时注入 Formspree form ID
- **mailto 回退**：无端点配置时降级为 mailto 提交（业务邮箱待确认后注入）
- 两个表单均已渲染验证

## CTA 意图映射（§25）

| 页面意图 | CTA |
|---|---|
| Product | Request Sample |
| Bulk | Request Quote |
| OEM | Start Private Label Project |
| Testing | Request Product Information |
| Manufacturer | Request Supplier Qualification |

已实现于主站各页 hero/底部 CTA。

## 待确认项

- 业务邮箱（Formspree 账号与收件邮箱需人工配置）
- 表单是否加反垃圾（honeypot 已加占位）
