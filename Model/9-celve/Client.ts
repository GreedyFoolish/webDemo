import { myContext } from "./context";
import { stratergyInterface } from "./interface";
import { addStratergy, subStratergy } from "./stratergy";

export class Client {
    private stratergy: stratergyInterface
    private stratergyMap = {
        "add": addStratergy,
        "sub": subStratergy
    }
    private context: myContext
    constructor(stratergy: stratergyInterface | string) {
        if (typeof stratergy == "string") {
            const curStratergy = this.stratergyMap[stratergy]
            if (curStratergy) {
                this.stratergy = new curStratergy()
                this.context = new myContext(this.stratergy)
            } else {
                console.error("错误的策略类型")
            }
        } else {
            this.stratergy = stratergy
            this.context = new myContext(this.stratergy)
        }
    }
    execute(a: number, b: number): number {
        return this.context.execute(a, b)
    }
}

const stratergy = new addStratergy()
// const client = new Client("sub")
const client = new Client(stratergy)
const ans = client.execute(10, 5)
console.log(ans)