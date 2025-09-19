// 具名导出
export const a = 1
// 具名导出
export function b() { }
const c = 2
// 具名导出
export { c }
const d = 3
// 具名导出
export { d as k }
// 默认导出
// export default 3
// 默认导出
// export default function () { }
// const e = 4
// 默认导出
// export default { e as default}
const f = 4, g = 5, h = 6
export { f, g, h as default }
console.log("export run")
/**
 * 导出结果如下：
[Module: null prototype] {
  a: 1,
  b: [Function: b],
  c: 2,
  default: 6,
  f: 4,
  g: 5,
  k: 3
}
 */