// string number boolean null undefined symbol bigint object
let str = "hello"

// any 类型
let a: any = "aaa"
let aa = null

// 字面量类型
const b = "hello"
const c = null

let d = "word"
d = "word"

// 联合类型
let v1: string | number | boolean | undefined = undefined
v1 = "aa"
v1 = 123
v1 = true
// v1 = null // 不能将类型“null”分配给类型“string | number | boolean | undefined”。

let sex: "男" | "女"
sex = "男"
// sex = "123" // 不能将类型“"123"”分配给类型“"男" | "女"”。

// 数组类型
// 表现方式：1、类型[] 2、Array<类型>
const arr1: string[] = ["1", "2", "3"]
const arr2 = ["1", "2", "3"]
const arr3: Array<number> = [1, 3, 4]

// 空数组赋值，在 strict 严格模式下，默认是 any 类型
// 但是这个和其他类型检查配置相关
const arr4 = []
arr4.push(1)
arr4.push("123")

// 联合类型数组
const arr5: (string | number)[] = ["a", 1, 2, "b"]
const arr6: Array<string | number> = ["a", 1, 2, "b"]
// 这种方式只能要么全 string 要么全 number
const arr7: string[] | number[] = ["1", "2", "3"]
// const arr8: string[] | number[] = ["1", "2", 3] // 报错
const arr9: Array<string> | Array<number> = ["1", "2", "3"]

// 元组类型
const tuple1: [string, number] = ["1", 2]
// const tuple1: [string, number] = ["1", 2, 3] // 报错

// 使用场景：坐标
let position: [x: number, y: number] = [3.14, 5.126]
position = [123, 23]

// 空数组的元组，只能赋值为空数组
let tuple2: [] = []

function add(a: number, b: number) {
    return a + b
}
const r = add(1, 2)

// 可选参数
// 可以在某些参数后面加上 ?，表示该参数可以缺省
// 注意：可选参数必须是最后一个参数
function sum(a: number, b: number, c?: number) {
    // console.log(a, b, c) // 1 2 undefined
    return a + b
}
sum(1, 2)

// 默认参数本身就是可选参数
function sum2(a: number, b: number, c: number = 10) {
    // console.log(a, b, c) // 1 2 10
    return a + b
}
sum2(1, 2)

// 剩余参数
const fn = (a: number, b: number, ...rest: Array<number>) => {
    // console.log(a, b, rest) // 1 2 [3, 4, 5]
}
fn(1, 2, 3, 4, 5)

// 如果函数没有返回值，那么默认返回类型是 void

// 泛型参数
function identity<T>(id: T) {
    return id
}
let output1 = identity<string>("123")
// 可以推断字面量类型
let output2 = identity("123")

function getTuple<T, K>(a: T, b: K) {
    return [a, b]
}
getTuple(1, 1)

function myNumberFilter(arr: Array<number>, callback: (item: number, index?: number) => boolean) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        if (callback(item, i)) {
            result.push(item)
        }
    }
    return result
}
const res1 = myNumberFilter([1, 2, 3, 4], item => item % 2 == 1)
console.log("res1", res1)

function myFilter<T>(arr: Array<T>, callback: (item: T, index?: number) => boolean) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        if (callback(item, i)) {
            result.push(item)
        }
    }
    return result
}
const res2 = myFilter(["ab.js", "cd.ts", "ef.java", "gh.ts"], item => item.endsWith(".ts"))
console.log("res2", res2)

// 对象字面量类型
const v2 = "hello"
const obj1 = {
    id: 1,
    name: "jack",
    age: 18
}

const obj2: {
    id: number,
    name: string,
    age: number,
    sex?: "男" | "女"
} = {
    id: 1,
    name: "jack",
    age: 18
}

const arr10: Array<{
    name: string,
    age: number
}> = [
        {
            name: "jack",
            age: 18
        },
        {
            name: "tom",
            age: 20
        }
    ]

function getInfo(user: { name: string, age: number }): Array<{ name: string, age: number }> {
    return [
        {
            name: "tom",
            age: 20
        }
    ]
}

getInfo({ name: "lily", age: 21 })
// getInfo({ name: "lily", age: 21, sex: "女" }) //报错
// const userObj = { name: "lily", age: 21, sex: "女" }
// getInfo(userObj)
/**
 * 不报错，因为 TS 是鸭子类型。
 * 直接传递对象字面量时，会进行额外的类型检查，如果对象有额外未声明的属性，就会报错
 * 如果是先声明对象变量再进行传递时，TS 会采取结构化类型系统，只要对象结构满足函数参数的要求，就不会报错
 */


/**
 * 自定义类型
 * 有以下两种实现方式
 * 类型别名：创建一个类型的新的名字，类型别名可以是任何有效的类型
 * 接口：接口其实时面向对象的概念，所以一般用于定义对象类型
 */

// 类型别名
// type 类型别名 = /* 类型 */
type Pointer = {
    x: number,
    y: number
}

type ID = string | number

type Age = number

type User = {
    id: ID,
    name: string,
    age: Age
}

const obj3: User = {
    id: 1,
    name: "jack",
    age: 18
}

// 接口
// interface 接口名 { /* 属性名: 属性类型 */ }
interface Point {
    x: number,
    y: number
}

interface Person {
    id: ID,
    name: string,
    age: Age
}

const obj4: Person = {
    id: 1,
    name: "jack",
    age: 18
}

// 在函数和数据中使用自定义类型
function fn2(user: User) {
    console.log(user.name)
}

const getPerson: Array<Person> = [
    {
        id: 1,
        name: "jack",
        age: 18
    }
]

type InfoFn = (id: number, name?: string) => string

// 可选属性和函数声明
interface Book {
    id: number,
    name: string,
    price?: number,
    show(id: number): void
    filters?: (id: number) => void
    info: InfoFn,
    author?: User
}

const book: Book = {
    id: 1,
    name: "jack",
    // price: 12,
    show(id: number) {

    },
    // filters(id: number) {
    //     console.log("id", id)
    // },
    info(id: number, name?: string) {
        return "123"
    },
    // author: {
    //     id: 2,
    //     name: "tom",
    //     age: 20
    // }
}



