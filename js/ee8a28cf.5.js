(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{206:function(n,o){n.exports='\x3c!--\ntitle: 网站设置 \nsort: 7\n--\x3e\n\n通过一些配置定义网站一些内容如：标题、favicon、logo等。\n\n## 网站标题\n\n通过定义首页，在首页添加配置，配置 `title: 网站标题` 即可配置网站标题。\n\n```markdown\n\x3c!--\ntitle: 首页 \nlayout: IndexLayout\n--\x3e\n\n下面是首页内容\n```\n\n## favicon\n\n默认显示 rdoc 的图标，自定义 favicon 需要自己生成一个图标命名为 `favicon.ico` 放在项目的根目录，与 `package.json` 同级目录。\n\n也可以在 `package.json` 中添加配置，如下：\n\n```js\n{\n  "rdoc": {\n    "favicon":"favicon.ico",\n  },\n  ...\n}\n```\n\n⚠️ 注意事项：这里只支持自定义 `.ico` 格式的图片logo，不接受其它格式。\n\n## logo\n\n默认显示 rdoc 工具的 `logo`, 需要自定，有两种方法：\n\n> 1. 放入 Markdown 文档工程的根目录，命名`logo.svg` 即可。  \n> 2. 在 `package.json` 中定义配置。  \n\n```js\n{\n  "rdoc": {\n    "logo":"rdoc.logo.svg",\n  },\n  ...\n}\n```\n\n⚠️ 注意事项：这里只支持自定义 `.svg` 格式的图片logo，不接受其它格式。\n'}}]);