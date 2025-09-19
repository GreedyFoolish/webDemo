// 仅运行依次该模块，不导入任何内容
// import "./export.mjs"

// 导入属性，将 a,b 放到变量 a,b 中。 a -> a，b -> b
// import { a, b } from "./export.mjs"
// console.log(a, b)

// 导入属性，将 default 放到变量 c 中。 default -> c
// import c from "./export.mjs"
// console.log(c)

//  default -> c，a -> a，b -> b
// import c, { a, b } from "./export.mjs"

// 将模块对象放入到变量 obj 中
import * as obj from "./export.mjs"
// console.log(obj)

// a -> t1，b -> t2
import { a as t1, b as t2 } from "./export.mjs"
// console.log(t1, t2)

// 将 default 放入到变量 all 中。 default -> all
import { default as all } from "./export.mjs"
// console.log(all)

// default -> all2，b -> b
import { default as all2, b } from "./export.mjs"
// console.log(all2, b)

// 以上为静态导入

// 动态导入，返回一个 Promise，完成时的数据为模块对象
import("./export.mjs")