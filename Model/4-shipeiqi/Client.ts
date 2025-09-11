import { myAdapter } from "./adapter";
import { adapterInterface } from "./interface";
import { myService } from "./service";

export class Client {
    private adapter: adapterInterface
    constructor(adapter: adapterInterface) {
        this.adapter = adapter
    }
    execute(msg: string) {
        this.adapter.sendMessage(msg)
    }
}

const service = new myService()
const adapter = new myAdapter(service)
const client = new Client(adapter)
client.execute("12345")