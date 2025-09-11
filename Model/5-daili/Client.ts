import { proxyInterface } from "./interface";
import { myProxy } from "./proxy";
import { myServer } from "./server";

export class Client {
    private proxy: proxyInterface
    private server: myServer
    constructor() {
        this.server = new myServer()
        this.proxy = new myProxy(this.server)
    }
    execute() {
        this.proxy.operation()
    }
}

const client = new Client()
client.execute()