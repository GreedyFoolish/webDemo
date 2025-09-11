import Watcher from "./Watcher.js";

// 发布者
export default class Dep {
    // 该静态属性用于暂时保存当前的 Watcher 对象
    static target: Watcher | null = null
    subscribeList: Array<Watcher>
    constructor() {
        this.subscribeList = []
    }

    addSubscribe(subscribe: Watcher) {
        if (this.subscribeList.indexOf(subscribe) == -1) {
            this.subscribeList.push(subscribe)
        }
    }
    notify() {
        this.subscribeList.forEach(subscribe => {
            subscribe.update()
        })
    }
}