import { observerInterface, proxyInterface } from "./interface";

export class myObserver implements observerInterface {
    private id: string
    private proxy: proxyInterface

    constructor(proxy: proxyInterface, id: string) {
        this.proxy = proxy
        this.id = id
    }
    addObserver(topic: string): void {
        this.proxy.addObserver(topic, this)
    }
    removeObserver(topic: string): void {
        this.proxy.removeObserver(topic, this)
    }
    updated(topic: string, data: string): void {
        console.log(`id： ${this.id} topic： ${topic} 数据进行更新： ${data}`)
    }
}