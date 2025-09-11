import { display } from "./display/display";
import { Chong } from "./chong/chong";

// const wrap = document.getElementById("warp")
const dis = new display()

dis.initStock()

const opt = new Chong(1, 1)
console.log("opt", opt)