import { proxyInterface } from "./interface";


export class myProxy implements proxyInterface {
    private realServer: proxyInterface
    constructor(proxy: proxyInterface) {
        this.realServer = proxy
    }
    checkAccess(): boolean {
        return true
    }
    operation(): void {
        if (this.checkAccess()) {
            this.realServer.operation()
        }else{
            console.error("验证未通过")
        }
    }
}