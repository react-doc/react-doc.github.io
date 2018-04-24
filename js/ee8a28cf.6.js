(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{207:function(n,o){n.exports='\x3c!--\ntitle: 菜单排序 \nsort: 5\n--\x3e\n\n我们通过在 `Markdown` 文件顶部，添加一段注释，添加`sort`参数，来配置菜单的顺序。\n\n## 顶部菜单排序\n\n顶部菜单是用过，运行命来来排序的，也可以使用 `sort` 参数来排序菜单。\n\n**通过命令排序**\n\n```json\n{\n  "name": "doc-example",\n  "version": "1.0.0",\n  "main": "index.js",\n  "scripts": {\n    "doc": "rdoc -d index,src/introduce,doc --clean"\n  },\n  "license": "MIT"\n}\n```\n\n上面 `package.json` 中的命令，可以排序 `顶部` 导航菜单顺序 `-d` 参数后面就是跟的目录，可以有顺序。\n\n**通过Markdown配置设置排序**\n\n```shell\nrdoc -d index,src/introduce,doc --clean\n```\n\n上面命令指定了 `index`、`src/introduce`、`doc` 三个目录，默认 `-c` 指向的目录 `src/component` 放在最后面，通过配置也可更换顺序，在每个根目录下面建立 `README.md` 文件，添加下面注释配置，通过 `sort` 参数设置数字，来指定位置。\n\n```markdown\n\x3c!--\ntitle: Layout 布局组件\nsort: 1\n--\x3e\n```\n\n## 二级菜单顺序\n\n```markdown\n\x3c!--\ntitle: Layout 布局组件\nsort: 1\n--\x3e\n\nLayout 布局组件说明\n```\n'}}]);