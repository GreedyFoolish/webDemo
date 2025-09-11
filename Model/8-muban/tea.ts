import { makeCool } from "./interface";

export class myTea extends makeCool {
    flag: boolean = false
    step2(): void {
        console.log("将茶叶放入杯子")
    }
    step3(): void {
        console.log("侵泡茶叶")
    }
    step4(): void {
        console.log("加入柠檬")
    }

    allowedStep4(): boolean {
        return this.flag
    }
    setFlag(flag: boolean = false): void {
        this.flag = flag
    }
}