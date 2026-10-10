# DOMAIN_STRATEGY.md — CHARCOAL HUB 域名策略

> 2026-10-07。命名评估 + DNS 实测。**注册状态无法从 DNS 判断，未做注册状态断言。**

## 1. DNS 实测（2026-10-07）

| 候选域名 | A 记录 | 判定 |
|---|---|---|
| chinacharcoalhub.com | 无 | 未解析（不代表可注册）|
| charcoalhub.com | 54.243.117.197 | **已被使用** |
| chinacharcoalsupply.com | 无 | 未解析（不代表可注册）|
| charcoalsupplyhub.com | 无 | 未解析（不代表可注册）|
| chinacharcoalsource.com | 无 | 未解析（不代表可注册）|
| chinacharcoalhub.com | 203.12.200.78 | 已有解析（可能为业主持有）|

## 2. 命名评估（按 Prompt §2 原则）

**第一优先级：Charcoal + Hub**

- `chinacharcoalhub.com` — 品类中立、Charcoal+Hub 组合、长度可接受（17 字符）。**命名首选**。
- `charcoalhub.com` — 最佳但已被使用。

**第二优先级：China + Charcoal + Supply/Source**

- `chinacharcoalsupply.com` — 备选。
- `chinacharcoalsource.com` — 备选。

**排除**：过长 / 含连字符 / 只绑 hookah / 只绑 BBQ / 像工厂品牌的域名。

## 3. chinacharcoalhub.com 观察

仓库命名 `guotan`（果炭/锅炭？）与 `chinacharcoalhub.com` 已有解析（203.12.200.78）暗示业主可能已持有该域名。若属实：

- 主站：chinacharcoalhub.com（或 www.chinacharcoalhub.com）
- 子站：data.chinacharcoalhub.com / manufacturer.chinacharcoalhub.com / testing.chinacharcoalhub.com / knowledge.chinacharcoalhub.com —— 与仓库命名完全对齐

若采用 chinacharcoalhub.com 系，则不再需要 charcoal 系域名；`chinacharcoalhub.com` 可作为跳转/别名域。

## 4. 结论与待确认

| 事项 | 状态 |
|---|---|
| 首选命名：chinacharcoalhub.com | 需业主在注册商查询可注册性 |
| chinacharcoalhub.com 是否业主持有 | **HUMAN CONFIRMATION REQUIRED** |
| 子域 DNS 配置（data/manufacturer/testing/knowledge）| 待域名确定后配置 |

> 按 Prompt 要求：不虚构注册状态。以上仅 DNS 实测 + 命名评估。
