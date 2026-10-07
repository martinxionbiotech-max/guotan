# DATA_MODEL.md — 产品与规格数据模型

> 2026-10-07。data.guotan 站 collection schema（zod，构建时校验）。

## products collection

字段（§7，无数据 null）：

```yaml
product_id: string（必填唯一）
product_name: string
product_type: string
application: string
raw_material: string
charcoal_source: string
shape: string
size: string
length/width/height/diameter: number|null
ash_content: string
moisture: string
fixed_carbon: string
volatile_matter: string
burning_time: string
ignition_time: string
odor: string
spark_level: string
temperature: string
packaging: string
private_label: boolean|null
minimum_order_quantity: string
production_capacity: string
testing_available: string
certifications: string[]
origin: string
manufacturer_id: string（引用校验）
last_verified: date|null
data_source: string（必填）
verification_status: enum[Verified|Supplier Reported|Third-Party Verified|Unverified]
```

**第一阶段状态**：collection 定义完成，0 条目（.gitkeep）。等待真实供应商数据。

## specifications collection

已发布 6 页（方法学，公开标准非自造数据）：ash-content / moisture / fixed-carbon / volatile-matter / burning-time / size-tolerance。每页结构：What It Measures / Why It Matters / Measurement Method / Buyer Relevance / Limitations / Data Source。

## applications / sizes / packaging collections

Schema 已定义，0 条目待真实数据。

## 校验规则（§31/§32，构建时）

- product_id / manufacturer_id 唯一性
- manufacturer_id 引用存在性（跨站引用验证）
- data_source 必填、verification_status 必填
- 数值字段单位一致性
- 缺 last_verified / data_source → 构建失败
