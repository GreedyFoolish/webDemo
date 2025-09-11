import { proxyInterface, publishInterface } from "./interface";

export class myPublisher implements publishInterface {
    private proxy: proxyInterface
    constructor(proxy: proxyInterface) {
        this.proxy = proxy
    }
    publish(topic: string, msg: string): void {
        this.proxy.message(topic, msg)
    }
}