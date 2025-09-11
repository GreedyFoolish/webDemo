import { observerInterface } from "./interface";

export class myObserver implements observerInterface {
    private id: string
    private data: string

    constructor(id: string, data: string = "") {
        this.id = id
        this.data = data
    }

    updated(data: string): void {
        this.data = data
        console.log(`id：${this.id} 数据进行更新：${data}`)
    }
}