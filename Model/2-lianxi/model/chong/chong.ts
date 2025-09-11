import { fxMap } from "../fxMap"

export class Chong {
    private x
    private y

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    public move(fx: number = 0) {
        const curFx: Object = fxMap[fx]
        console.log("curFx",curFx)
    }
}