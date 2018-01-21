webpackJsonp([11],{835:function(n,d){n.exports="\x3c!--\ntitle: \u7f51\u7ad9\u51c6\u5907 \nsort: 3\n--\x3e\n\n\u51c6\u5907\u4e00\u4e2a\u76ee\u5f55 `mkdir doc-example`, \u5728\u76ee\u5f55\u4e2d\u521b\u5efa\u4e00\u4e9b\u6587\u4ef6\uff0c\u4e3a\u4f60\u7684\u7f51\u7ad9\u89c4\u5212\u4e00\u4e9b\u76ee\u5f55\u7ed3\u6784\u3002\u5982\u679c\u4f60\u4e0d\u662f\u521d\u59cb\u5316\u4e00\u4e2a\u5de5\u7a0b\uff0c\u90a3\u4f60\u5728\u521b\u5efa\u4e00\u4e2a\u6587\u6863\u7f51\u7ad9\u524d\uff0c\u9700\u8981\u505a\u4e00\u4e9b\u51c6\u5907\u5de5\u4f5c\uff0c\u89c4\u5212\u4f60\u7684\u7f51\u7ad9\u76ee\u5f55\uff0c\u6bd4\u5982 `\u9876\u90e8\u4e00\u7ea7\u5bfc\u822a`\u3002\n\n## \u751f\u6210\u914d\u7f6e\u6587\u4ef6\n\n\u751f\u6210 `package.json` \u6587\u4ef6\n\n```shell\n$ npm init -y\n```\n\n## \u5efa\u7acb\u76ee\u5f55\n\n\u5efa\u7acb\u51e0\u4e2a\u76ee\u5f55\uff0c\u7528\u4e8e\u5b58\u653e `Markdown` \u6587\u4ef6\uff0c\u540e\u9762\u914d\u7f6e\u6307\u5b9a\u8fd9\u4e9b\u76ee\u5f55\uff0c\u8fd9\u4e9b\u76ee\u5f55\u5e2e\u52a9\u4f60\u751f\u6210 `\u9876\u90e8\u4e00\u7ea7\u5bfc\u822a`\u3002\n\n> 1. \u4e00\u7ea7\u5bfc\u822a\u76ee\u5f55\u4e0b\uff0c\u5efa\u7acb\u76ee\u5f55\uff0c\u5185\u5bb9\u5c06\u5c55\u793a\u5728\u8be5\u680f\u76ee\u4e0b\u9762\uff0c\u4f1a\u4ea7\u751f\u53f3\u8fb9\u83dc\u5355\u680f\u3002  \n> 2. \u6bcf\u4e2a\u76ee\u5f55\u4e0b\u9762\u5efa\u7acb `README.md` \u6587\u4ef6\uff0c\u89c6\u4e3a\u4e00\u7ea7\u5bfc\u822a\u9700\u8981\u5c55\u793a\u7684\u5185\u5bb9\u3002  \n> 3. \u9ed8\u8ba4\u6bcf\u4e2a\u76ee\u5f55\u90fd\u9700\u8981\u5efa\u7acb\u4e00\u4e2a `README.md`\u3002\n\n\u6839\u636e\u4e0a\u9762\u89c4\u5219\uff0c\u6211\u521b\u5efa\u4e86\u5982\u4e0b\u76ee\u5f55\u7ed3\u6784\uff1a\n\n**\u76ee\u5f55\u7ed3\u6784**\n\n```\n\u251c\u2500\u2500 about\n\u2502\xa0\xa0 \u2514\u2500\u2500 README.md\n\u251c\u2500\u2500 home\n\u2502\xa0\xa0 \u2514\u2500\u2500 README.md\n\u251c\u2500\u2500 introduce\n\u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 commands.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 markdown-config.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 theme-api.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 getting-started\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 install.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 site-creation.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 site-preparation.md\n\u2502\xa0\xa0 \u2514\u2500\u2500 guides\n\u2502\xa0\xa0     \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0     \u251c\u2500\u2500 add-blog.md\n\u2502\xa0\xa0     \u251c\u2500\u2500 add-index.md\n\u2502\xa0\xa0     \u251c\u2500\u2500 custom-menu.md\n\u2502\xa0\xa0     \u251c\u2500\u2500 html.md\n\u2502\xa0\xa0     \u251c\u2500\u2500 insert-img.md\n\u2502\xa0\xa0     \u2514\u2500\u2500 menu-sort.md\n\u2514\u2500\u2500 package.json\n```\n"}});