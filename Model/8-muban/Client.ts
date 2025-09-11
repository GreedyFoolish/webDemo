import { makeCool } from "./interface";
import { myTea } from "./tea";


const tea = new myTea()

function getAction() {
    const rad = Math.random()
    return rad > 0.5
}
const flag = getAction()

function make(cool: makeCool) {
    cool.init()
}
console.log("flag", flag)
tea.setFlag(flag)
make(tea)