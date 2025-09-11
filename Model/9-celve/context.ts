import { stratergyInterface } from "./interface";

export class myContext {
    private stratergy: stratergyInterface
    constructor(stratergy: stratergyInterface) {
        this.stratergy = stratergy
    }
    setStratergy(stratergy: stratergyInterface) {
        this.stratergy = stratergy
    }
    execute(a: number, b: number): number {
        return this.stratergy.operation(a, b)
    }
}