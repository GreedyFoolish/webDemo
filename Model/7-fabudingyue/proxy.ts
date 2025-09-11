import { observerInterface, proxyInterface } from "./interface";

export class myProxy implements proxyInterface {
    private observerList: Map<string, Array<observerInterface>>
    constructor() {
        this.observerList = new Map()
    }
    addObserver(topic: string, observer: observerInterface): void {
        const list = this.observerList.get(topic) || []
        const index = list?.findIndex(i => i == observer)
        if (index == -1) {
            list.push(observer)
            this.observerList.set(topic, list)
        }
    }
    removeObserver(topic: string, observer: observerInterface): void {
        const list = this.observerList.get(topic) || []
        const index = list?.findIndex(i => i == observer)
        if (index != -1) {
            list.splice(index, 1)
            this.observerList.set(topic, list)
        }
    }
    message(topic: string, msg: string) {
        const list = this.observerList.get(topic) || []
        for (const item of list) {
            item.updated(topic,msg)
        }
    }
}