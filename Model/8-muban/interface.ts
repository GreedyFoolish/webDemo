export abstract class makeCool {
    step1(): void {
        console.log("烧水")
    }

    // 将原料放入杯子
    abstract step2(): void
    // 冲泡
    abstract step3(): void
    // 加入调料
    abstract step4(): void

    init(): void {
        this.step1()
        this.step2()
        this.step3()
        if (this.allowedStep4()) {
            this.step4()
        }
    }

    allowedStep4() {
        return true
    }
}