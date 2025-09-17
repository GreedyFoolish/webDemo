"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// string number boolean null undefined symbol bigint object
let str = "hello";
// any 类型
let a = "aaa";
let aa = null;
// 字面量类型
const b = "hello";
const c = null;
let d = "word";
d = "word";
// 联合类型
let v1 = undefined;
v1 = "aa";
v1 = 123;
v1 = true;
// v1 = null // 不能将类型“null”分配给类型“string | number | boolean | undefined”。
let sex;
sex = "男";
// sex = "123" // 不能将类型“"123"”分配给类型“"男" | "女"”。
// 数组类型
// 表现方式：1、类型[] 2、Array<类型>
const arr1 = ["1", "2", "3"];
const arr2 = ["1", "2", "3"];
const arr3 = [1, 3, 4];
// 空数组赋值，在 strict 严格模式下，默认是 any 类型
// 但是这个和其他类型检查配置相关
const arr4 = [];
arr4.push(1);
arr4.push("123");
// 联合类型数组
const arr5 = ["a", 1, 2, "b"];
const arr6 = ["a", 1, 2, "b"];
// 这种方式只能要么全 string 要么全 number
const arr7 = ["1", "2", "3"];
// const arr8: string[] | number[] = ["1", "2", 3] // 报错
const arr9 = ["1", "2", "3"];
// 元组类型
const tuple1 = ["1", 2];
// const tuple1: [string, number] = ["1", 2, 3] // 报错
// 使用场景：坐标
let position = [3.14, 5.126];
position = [123, 23];
// 空数组的元组，只能赋值为空数组
let tuple2 = [];
function add(a, b) {
    return a + b;
}
const r = add(1, 2);
// 可选参数
// 可以在某些参数后面加上 ?，表示该参数可以缺省
// 注意：可选参数必须是最后一个参数
function sum(a, b, c) {
    // console.log(a, b, c) // 1 2 undefined
    return a + b;
}
sum(1, 2);
// 默认参数本身就是可选参数
function sum2(a, b, c = 10) {
    // console.log(a, b, c) // 1 2 10
    return a + b;
}
sum2(1, 2);
// 剩余参数
const fn = (a, b, ...rest) => {
    // console.log(a, b, rest) // 1 2 [3, 4, 5]
};
fn(1, 2, 3, 4, 5);
// 如果函数没有返回值，那么默认返回类型是 void
// 泛型参数
function identity(id) {
    return id;
}
let output1 = identity("123");
// 可以推断字面量类型
let output2 = identity("123");
function getTuple(a, b) {
    return [a, b];
}
getTuple(1, 1);
function myNumberFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (callback(item, i)) {
            result.push(item);
        }
    }
    return result;
}
const res1 = myNumberFilter([1, 2, 3, 4], item => item % 2 == 1);
console.log("res1", res1);
function myFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (callback(item, i)) {
            result.push(item);
        }
    }
    return result;
}
const res2 = myFilter(["ab.js", "cd.ts", "ef.java", "gh.ts"], item => item.endsWith(".ts"));
console.log("res2", res2);
// 对象字面量类型
const v2 = "hello";
const obj1 = {
    id: 1,
    name: "jack",
    age: 18
};
const obj2 = {
    id: 1,
    name: "jack",
    age: 18
};
const arr10 = [
    {
        name: "jack",
        age: 18
    },
    {
        name: "tom",
        age: 20
    }
];
function getInfo(user) {
    return [
        {
            name: "tom",
            age: 20
        }
    ];
}
getInfo({ name: "lily", age: 21 });
const obj3 = {
    id: 1,
    name: "jack",
    age: 18
};
const obj4 = {
    id: 1,
    name: "jack",
    age: 18
};
// 在函数和数据中使用自定义类型
function fn2(user) {
    console.log(user.name);
}
const getPerson = [
    {
        id: 1,
        name: "jack",
        age: 18
    }
];
const book = {
    id: 1,
    name: "jack",
    // price: 12,
    show(id) {
    },
    // filters(id: number) {
    //     console.log("id", id)
    // },
    info(id, name) {
        return "123";
    },
    // author: {
    //     id: 2,
    //     name: "tom",
    //     age: 20
    // }
};
const obj5 = {
    id: 1,
    name: "jack",
    age: 18,
    sex: "男"
};
const obj6 = {
    id: 1,
    name: "jack",
    // age: 18
    // birthdate: "2002-02-20" // 报错
};
// 类型断言
// TS 会根据上下文进行推断，但是有时候我们可以人为干预，确定某一个类型
// 类型断言就是告诉 TS 编译器，我知道我在做什么，这里没有类型安全问题
// 允许我们使用更宽松的方式处理类型问题
// 语法： 1、 值 as 类型 2、<类型>值
let someValue = "this is a string";
// 推荐使用 as 的语法糖，因为 react 中的 jsx 语法和 <类型>值 的方式会产生歧义
let strLen = someValue.length;
let strLen2 = someValue.length;
// 非空断言
// 当你确认某个值不是 null 或 undefined 的时候，可以直接使用非空断言
// 语法：值!
let maybeString = "hello";
let strLen3 = maybeString.length;
function getRandom(length) {
    if (!length || length <= 0) {
        return undefined;
    }
    return Math.random().toString(36).slice(-length);
}
let str2 = getRandom(6);
str2.charAt(0);
const ss = str2.charAt(0);
console.log("str2:", str2);
function getBox() {
    if (Math.random() > 0.5) {
        return {
            id: 1,
            name: "jack"
        };
    }
    return undefined;
}
function createProduction(box) {
}
// createProduction(getBox()) // 报错
createProduction(getBox());
createProduction(getBox());
const student = {
    name: "jack",
    address: {
        city: "成都",
        // street:"人民大街"
    }
};
console.log("street:", student.address?.street);
