"use strict";
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
    console.log(a, b, c); // 1 2 undefined
    return a + b;
}
sum(1, 2);
// 默认参数本身就是可选参数
function sum2(a, b, c = 10) {
    console.log(a, b, c); // 1 2 10
    return a + b;
}
sum2(1, 2);
// 剩余参数
const fn = (a, b, ...rest) => {
    console.log(a, b, rest); // 1 2 [3, 4, 5]
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
