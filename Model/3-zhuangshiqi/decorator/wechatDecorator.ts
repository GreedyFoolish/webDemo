import { notifyInterface } from "../interface";
import { baseDecorator } from "./baseDecorator";

export class myWechat extends baseDecorator {
    private wechat: string
    constructor(notify: notifyInterface, wechat: string) {
        super(notify)
        this.wechat = wechat
    }
    sendMessage(msg: string): void {
        super.sendMessage(msg)
        console.log(`wechat send msg ${this.wechat} : ${msg}`)
    }
}