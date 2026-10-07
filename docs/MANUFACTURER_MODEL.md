# MANUFACTURER_MODEL.md — 供应商数据模型

> 2026-10-07。manufacturer.guotan 站。

## manufacturers collection（§12）

```yaml
manufacturer_id: string（必填唯一）
name: string
location: string
factory_type: string
main_products: string[]
raw_materials: string[]
applications: string[]
production_capacity: string|null
production_lines: string|null
export_markets: string[]|null
oem: boolean|null
private_label: boolean|null
packaging: string|null
moq: string|null
quality_control: string|null
testing: string|null
certifications: string[]|null
factory_area: string|null
established: string|null   # 禁止编造成立年份
website: string|null
verification_status: enum[Verified|Supplier Reported|Third-Party Verified|Unverified]
last_verified: date|null
```

## Verification Status（§14，四级）

- **Verified**：可靠来源或现场/文件验证
- **Supplier Reported**：供应商自报数据（不作为事实呈现）
- **Third-Party Verified**：第三方检测/认证支持
- **Unverified**：未验证

## 页面模板（§13）

/companies/[slug]：Company Overview / Products / Manufacturing / Capacity / Quality Control / Testing / OEM / Packaging / Export / Verification / Related Products / Request Quote

## 第一阶段状态

Schema + 索引页完成，**0 厂家条目**（不编造工厂）。等 3-5 家真实供应商数据灌入。
