# INTERNAL_LINKING.md — 内部链接与实体图

> 2026-10-07。§21/§22/§43。

## 实体关系（§43）

```
Product
│
├── Manufacturer
├── Raw Material
├── Application
├── Specification
├── Testing
├── Packaging
└── OEM
```

示例（待真实数据）：26mm Coconut Shell Charcoal → Manufacturer A → Ash ≤ X% → Burning Time X–X min → Test Report #XXXX → 10kg Packaging → Private Label Available → Request Sample

## 跨站链接方向（§22）

| 从 | 到 |
|---|---|
| Product | Manufacturer / Testing / Specification / Application |
| Manufacturer | Products / Testing |
| Testing | Products |
| Knowledge | Product / Specification / RFQ |
| 主站产品页 | data 规格 / testing 方法学 / Request Sample |

## 实现

- `sites.ts` 五站 URL 常量（已含 guotan.com 占位），跨站链接全部走常量
- 主站产品页 CTA 按意图：Product → Request Sample；Bulk → Request Quote；OEM → Private Label；Testing → Product Info（§25）
- 待真实数据灌入后激活自动实体互链

## 禁止

- 所有页面只链首页
- 为 SEO 虚构实体关系
