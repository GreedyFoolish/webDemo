// git 初始化
// git init
// npm 初始化
// npm init -y
// 添加 .gitignore 文件，内容如下：
// node_modules
// ,DS_Store
// 安装依赖
// npm i webpack
// 添加远程仓库
// git remote add origin https://github.com/GreedyFoolish/qr-shower.git
// 将 master 分支改名为 main
// git branch -m master main
// 设置代理
// git config --global https.proxy http://127.0.0.1:7890
// git config --global http.proxy http://127.0.0.1:7890
// 取消代理
// git config --global --unset https.proxy
// git config --global --unset http.proxy
// 进行代码推送
// git push -u origin main
// 新建 index.js
// 设置 package.json 文件的脚本start，用于运行 index.js 文件
// "start": "node index.js"
// 安装 qrcode
// npm i qrcode
// 编写如下代码
/**
 var QRCode = require('qrcode');
 
 QRCode.toString(
     'this is a demo',
     {
         type: 'terminal'
     },
     function (err, url) {
         console.log(url);
     }
 );
 */
// 运行 npm start，查看终端输出
// 提交代码
// git push
