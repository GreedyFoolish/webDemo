import { FactoryA } from "./factory/FactoryA"
import { MyFactory } from "./factory/myFactory"

export class Client {
    private factory: MyFactory

    constructor(fac: MyFactory) {
        this.factory = fac
    }

    public makeFurniture(): any {
        const chair = this.factory.makeChair()
        const sofa = this.factory.makeSofa()
        const table = this.factory.makeTable()
        return {
            chair,
            sofa,
            table
        }
    }
}

const client = new Client(new FactoryA())
const list = client.makeFurniture()

console.log(`${list.chair.sitOn()} ${list.table.putOn("123")}`)