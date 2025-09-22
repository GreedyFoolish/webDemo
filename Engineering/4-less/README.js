// 什么是Less？
// Less 是一种 CSS 预处理器，它扩展了 CSS 语言，增加了变量、 Mixin、 函数等特性，使 CSS 更易维护和扩展
// Less 是一种更加简洁的样式代码，它和 CSS 非常像，但是又不太一样。它可以让编写样式变得更容易
// Less 代码虽好，但它无法被浏览器识别，因此需要一个工具将其转换为血统纯正的 css 代码
// 由于 node 环境具有读写文件的能力，于是在 node 环境中可以轻松的完成文件的转换
// npm 上有一个包叫做 less，它运行在 node 环境中，通过它可以完成对 less 代码的转换

// node 环境在前端工程化中，充当了一个辅助的角色，它并不直接运行前端代码，而是让我们编写前端代码更加舒适便利
// 转换代码，称之为编译（compile），转换代码的工具，称之为编译器（compiler）

// 1. 安装 less
// less 包提供了一个 cli 工具 lessc，有两种方式去使用
// 方式一：全局安装 less，这种方式可以在任何终端目录使用 lessc 命令，但是不利于版本控制
// npm i -g lessc
// 方式二：本地安装 less，这种方式会把 less 包安装在工程目录的 node_module 中，但是你无法全局使用 lessc 命
// 令，但是可以在当前工程目录中使用 npx lessc 运行该命令
// npm i less
// 注意：npx 是 npm 提供的一个小工具，它可以运行当前项目中安装到 node_modules 中的 cli 命令
// 如果配置 package.json 文件，无需使用 npx
// 如果可以，应尽量使用本地安装
// 2. 创建 less 文件
// 示例详见 example 中的内容
// 3. 编译 less 文件
// 使用 less 命令，对编写的 less 文件进行编译
// lessc index.less index.css
// 4. 新建 index.html 文件，引用编译结果 index.css 文件
// 目前，编写 less 代码会遇到一点小麻烦，就是每次编写后，都需要运行命令进行编译
// 因此，我们可以使用 less-watch-compiler

// Less 的核心语法
// Less 官网：https://lesscss.org/
// Less 中文网：https://less.bootcss.com/

// 重点关注：变量、嵌套、混合，还有特别注释
