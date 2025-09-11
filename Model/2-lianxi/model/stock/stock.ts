import { colorMap } from "../Coloer"

export class Stock {
    // background 地板， border 边框， food 食物， head 头， body 身体
    private type: string = "background"
    private colorIndex: number = 0
    private color: string = colorMap[this.colorIndex]
    private x: number
    private y: number
    constructor(type: string = "background", colorIndex: number = 0, x: number, y: number) {
        this.type = type
        this.colorIndex = colorIndex
        this.x = x
        this.y = y
    }
}