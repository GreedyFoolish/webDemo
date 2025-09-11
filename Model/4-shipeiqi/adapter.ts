import { adapterInterface } from "./interface";
import { myService } from "./service";

export class myAdapter implements adapterInterface {
    private service: myService
    constructor(service: myService) {
        this.service = service
    }
    sendMessage(msg: string): void {
        console.log(`适配器转换数据：${msg}`)
        const data = this.convertData(msg)
        this.service.serviceMethod(data)
    }
    private convertData(msg: string) {
        return `data： ${msg}`
    }
}