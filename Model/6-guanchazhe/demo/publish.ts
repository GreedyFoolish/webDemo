import { publisherface } from "./interface";
import { myObserver } from "./observer";

export class myPublisher implements publisherface {
    private observerList: Array<myObserver>

    constructor() {
        this.observerList = []
    }

    addObserver(observer: myObserver): void {
        const index = this.observerList.findIndex(i => i == observer)
        if (index === -1) {
            this.observerList.push(observer)
        }
    }
    removeObserver(observer: myObserver): void {
        const index = this.observerList.findIndex(i => i == observer)
        if (index > -1) {
            this.observerList.splice(index, 1)
        }
    }
    notifyObserver(data: string): void {
        this.observerList.forEach(i => {
            i.updated(data)
        })
    }

}