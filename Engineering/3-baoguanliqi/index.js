// 查看源
// npm config get registry

// 配置淘宝镜像源
// npm config set registry https://registry.npm.taobao.org

// 配置官方源
// npm config set registry https://registry.npmjs.org/

// 初始化
// npm init # 初始化工程，帮助生成 package.json 文件
// npm init -y # 初始化工程，全部使用默认配置生成 package.json 文件

// 安装
// 分为本地安装和全局安装

// 本地安装
// 本地安装又分为安装普通依赖（最常见）和安装开发依赖
// 会将包下载到当前命令行所在目录的 node_module 中
// 绝大部分安装都使用本地安装
// npm i 包名
// npm i --save 包名
// npm i 包名@版本号

// 安装普通依赖
// 同上

// 安装开发依赖
// 若仅作为开发，则添加参数 -D
// npm i -D 包名
// npm i -D 包名@版本号

// 还原安装
// npm i --production # 仅还原 dependencies 中的依赖

// 全局安装
// 会将包下载到一个全局的位置
// 只有需要使用某个全局命令时，才需要进行全局安装
// npm i -g 包名
// npm i -g 包名@版本号

// 卸载
// 分为本地卸载和全局卸载

// 本地卸载
// 卸载本地的安装包
// npm uninstall 包名

// 全局卸载
// 卸载全局的安装包
// npm uninstall -g 包名

// 查看包信息
// 查看包所有的版本
// npm view 包名 versions
