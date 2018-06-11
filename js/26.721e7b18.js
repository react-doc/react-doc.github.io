(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{544:function(n,o){n.exports='\x3c!--\ntitle: RDoc\nlayout: IndexLayout\nvisible: true\n--\x3e\n\n<style>\nbody, html { background: #fff; }\n.markdown{ padding: 0 20px; }\n.jumbotron {\n  position: absolute;\n  background-color: #383838;\n  top: 56px;\n  left: 0;\n  right: 0;\n  padding-top: 80px;\n  min-height: 380px;\n  color: #c1c1c1;\n}\n.jumbotron-block { min-height: 400px; }\n.jumbotron-warpper {\n  max-width: 1200px;\n  padding: 0 30px;\n  margin: 0 auto;\n}\n.jumbotron-title {\n  font-size: 30px;\n  font-weight: bold;\n  padding-bottom: 20px;\n}\n.jumbotron-des {\n  font-size: 1.25rem;\n  line-height: 1.5;\n  font-weight: 300;\n  margin-bottom: 30px;\n  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";\n}\n.jumbotron .jumbotron-btn {\n  display: inline-block;\n  color: #333;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  background-color: #fff;\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: .25rem;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n}\n.jumbotron-btn:hover {\n  background-color: #bbb;\n  color: #333;\n}\n.jumbotron-btn:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);\n}\n</style>\n<div class="jumbotron">\n  <div class="jumbotron-warpper">\n    <div class="jumbotron-title">RDoc </div>\n    <div class="jumbotron-des">RDoc 是一个文档生成工具，用于生成文档网站或简单的博客网站。<br/>简单到你只需写 Markdown 文件就可以帮助你生成网站。<br/>同时可以方便的集成到你的项目工程中。</div>\n    <a class="jumbotron-btn" href="#/introduce/init-project">快速开始</a>\n  </div>\n</div>\n<div class="jumbotron-block"> </div>\n\n在开始之前，推荐先学习 Markdown 语法，并正确安装和配置了 [Node.js](https://nodejs.org) v8.0 或以上。\n\n主要用于快速生成文档工具或简单的网站，只需要写Markdown文件既可。\n\n```bash\nnpm install rdoc -g   # 安装工具\n# /usr/local/bin/rdoc -> /usr/local/lib/node_modules/rdoc/.bin/rdoc.js\n# /usr/local/bin/rdoc-cli -> /usr/local/lib/node_modules/rdoc/.bin/rdoc.js\n\nrdoc init my-project  # 初始化项目\n# 也可以使用 rdoc-cli 命令，跟 rdoc 命令是一样的\n# 增加 用 rdoc-cli 命令，目的是解决 Mac 系统自带的 Ruby 命令 rdoc 冲突\n\ncd my-project && npm start # 进入工程，启动服务\n```\n\n### Command\n\n```shell\nUsage: rdoc [options]\n\nFast static site generator for React.\n\nOptions:\n\n  -i, init [path]        Create an empty website or reinitialize an existing one.\n  -d, --doc <path>       Other documents generated.\n  -o, --output <path>    Writes the compiled file to the disk directory. (default: .rdoc-dist)\n  -p, --port [number]    The port. (default: 5858)\n  --host [host]      The host. (default: 0.0.0.0)\n  -b, --branch <branch>  Name of the branch you are pushing to. (default: gh-pages)\n  --publish [url]        Other documents generated.\n  --build                Creating an optimized production build.\n  --clean                Delete the .cache folder.\n  -h, --help             output usage information\n\nExamples:\n\n  $ rdoc init\n  $ rdoc init doc-example\n  $ rdoc -d doc/mm\n  $ rdoc -d tutorial,doc\n  $ rdoc -d tutorial,doc --clean --build\n  $ rdoc -p 2323  -d doc --clean\n  $ rdoc --host 0.0.0.0 -d doc --clean\n  $ rdoc --publish https://<your-git-repo>.git --branch master\n```\n'}}]);