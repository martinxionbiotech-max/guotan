# TESTING_MODEL.md — 检测数据模型

> 2026-10-07。testing.guotan 站。

## 检测方法学页（已发布 7 页，§16/§17）

/tests/ash-content/ /tests/moisture/ /tests/fixed-carbon/ /tests/volatile-matter/ /tests/burning-time/ /tests/size-tolerance/ /tests/emissions/

每页结构：What It Measures / Why It Matters / Typical Measurement Method / Buyer Relevance / Product Comparison / Available Test Reports / Limitations / Data Source

**红线**：只写公开标准方法学（GB/T、ISO 等），绝对禁止根据行业常识生成"我们的产品检测结果"。检测数据必须来自第三方报告、工厂报告、实际测试或明确公开标准。

## reports collection（§18，schema 已定义，0 条目）

```yaml
report_id: string
product_id: string（引用）
manufacturer_id: string（引用）
test_type: string
laboratory: string
test_date: date
report_number: string
result: string
unit: string
standard: string
document: string|null
verification_status: enum
```

关联：Product → Manufacturer → Testing Report → Specification。

## 第一阶段状态

7 个方法学页 + reports 索引页完成；reports 0 条目（等真实检测报告）。
