# DATA_QUALITY.md — 数据质量机制

> 2026-10-07。§31/§32。

## 构建时校验（已实现，zod content.config）

- product_id / manufacturer_id / report_id 唯一性
- manufacturer_id 引用校验（产品必须指向存在的厂家）
- data_source 必填、verification_status 必填（enum）
- 数值字段单位与类型（number|null）
- slug 与文件名一致性

## 检查清单（每次灌入数据时运行）

- [ ] Duplicate product ID
- [ ] Duplicate manufacturer ID
- [ ] Broken references（product → manufacturer）
- [ ] Missing data source
- [ ] Invalid units（% vs min vs mm 混用）
- [ ] Impossible values（灰分 >100% 等）
- [ ] Missing verification status
- [ ] Missing last_verified
- [ ] Product without manufacturer
- [ ] Test report without product
- [ ] Manufacturer without product

## 现状

- collections 全空（.gitkeep），无违规数据
- 6 规格页 + 7 测试页 + 8 knowledge 篇为方法学/教育内容，全部标注来源，无自造检测数据
