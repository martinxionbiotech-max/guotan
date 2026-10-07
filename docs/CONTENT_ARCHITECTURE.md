# CONTENT_ARCHITECTURE.md — 内容架构

> 2026-10-07。内容职责划分与发布规则。

## 职责矩阵（§29）

| 站 | 内容 | 禁止 |
|---|---|---|
| 主站 | 产品概览、OEM/PL 流程、公司能力、RFQ | 重复子站数据细节 |
| data | 产品条目、规格数值、尺寸、包装 | 营销文案 |
| manufacturer | 供应商档案、产能、资质 | 产品详情 |
| testing | 检测方法学、报告记录 | 宣传检测能力 |
| Knowledge | 买方教育 cornerstone | 低价值 "What is X" |

## 已发布内容（第一阶段）

**主站 19 页**：home / products/ + 4 品类（coconut-shell/hookah/bbq/bamboo）/ oem / private-label / testing / packaging / manufacturing / export / request-quote / request-sample / contact / about / compliance / knowledge

**data 站 6 规格方法学页**：ash-content / moisture / fixed-carbon / volatile-matter / burning-time / size-tolerance

**testing 站 7 测试页**：ash / moisture / fixed-carbon / volatile-matter / burning-time / size-tolerance / emissions + reports 索引

**Knowledge 站 8 篇 cornerstone**：
how-to-choose-hookah-charcoal / how-to-compare-coconut-shell-charcoal / what-ash-content-means / how-long-coconut-charcoal-burns / 25mm-vs-26mm-charcoal / how-to-source-charcoal-from-china / coconut-charcoal-moq / charcoal-container-loading

## 内容红线（§33/§34）

- 不编造：产品条目、厂家、检测结果、认证、产能、出口国家
- 无数据字段 = null，页面标注 pending
- 不写 "best/premium/world-class" 无证据表述
- 法规内容：标来源 + 适用范围 + 更新时间 + uncertainty
- 每页回答一个真实买方问题或承担一个明确商业/数据功能

## 待灌入数据（第二阶段，人工采集后）

3-5 家中国工厂的真实数据：25/26/27mm 产品、灰分、水分、固定碳、燃烧时间、包装、MOQ、检测报告、OEM 条件、产能
