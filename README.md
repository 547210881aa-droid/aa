# 今天吃什么 · GitHub Pages 部署包

这是可直接部署到 GitHub Pages 的静态网页项目。

## 文件结构

```text
index.html
styles.css
app.js
assets/
  images/
    Frame17.png
    carousel/
      cupcake.png
      pie.png
      strawberry.png
      chicken.png
      blueberry.png
      peach.png
  svg/
    Frame_14_restored.svg
    Group_10.svg
    download.svg
    download-1.svg
```

## GitHub Pages 部署

1. 将本目录中的全部文件和文件夹上传到 GitHub 仓库根目录。
2. 不要只上传 `index.html`，必须同时保留 `assets` 目录及其层级。
3. 在仓库 **Settings → Pages** 中选择从默认分支的根目录部署。
4. 等待部署完成后访问仓库对应的 `github.io` 地址。

所有资源均使用相对路径，适用于项目型 GitHub Pages 地址，例如：

`https://用户名.github.io/仓库名/`

文件名区分大小写，请不要单独改名。
