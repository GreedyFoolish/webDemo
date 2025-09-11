import { Stock } from "../stock/stock"

export class display {
    private width: number
    private height: number
    public stockList: Array<Stock>

    constructor(width: number = 15, height: number = 15) {
        this.width = width
        this.height = height
        this.stockList = []
    }

    initStock() {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                if (i == 0 || j == 0 || i == this.width - 1 || j == this.height - 1) {
                    this.stockList.push(new Stock("border", 1, i, j))
                } else {
                    this.stockList.push(new Stock("background", 1, i, j))
                }
            }
        }
        console.log("stockList",this.stockList)
    }
}