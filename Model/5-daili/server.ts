import { proxyInterface } from "./interface";

export class myServer implements proxyInterface {
    operation(): void {
        console.log(`代理对象操作被调用`)
    }
}