# 神乎其技 Scratch 學習網站

這是一個依據南投縣新庄國民小學 115 學年度五年級彈性學習課程「神乎其技」建立的 Scratch 學習網站。

網站內容包含：

- 課程目標與核心素養
- 第一學期與第二學期每週學習任務
- Scratch 作品任務
- 上傳創作坊與同儕互評檢核
- GitHub Pages 自動部署流程

## 本機開發

```bash
pnpm install
pnpm run dev
```

## 建置

```bash
pnpm run build
```

## 部署

推送到 GitHub `main` 或 `master` 分支後，GitHub Actions 會自動建置並部署到 GitHub Pages。
