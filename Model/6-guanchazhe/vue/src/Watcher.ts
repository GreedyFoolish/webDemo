import Dep from "./Dep.js";
import Vue from "./Vue.js";

// 观察者
export default class Watcher {
    vm: Vue
    el: Node
    vmKey: string
    constructor(vm: Vue, el: Node, key: string) {
        this.vm = vm
        this.el = el
        this.vmKey = key
        // 进行依赖收集
        Dep.target = this
        this.update()
        // 避免重复收集依赖，收集依赖完成后，将 Dep.target 置空
        Dep.target = null
    }

    update() {
        if (this.el.nodeType === Node.TEXT_NODE) {
            this.el.nodeValue = this.vm[this.vmKey]
        } else if (this.el.nodeType === Node.ELEMENT_NODE) {
            (this.el as HTMLElement).innerHTML = this.vm[this.vmKey]
        }
    }
}