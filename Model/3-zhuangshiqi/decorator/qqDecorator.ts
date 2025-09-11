import { notifyInterface } from "../interface";
import { baseDecorator } from "./baseDecorator";

export class myQQ extends baseDecorator {
    private QQID: string
    constructor(notify: notifyInterface, QQID: string) {
        super(notify)
        this.QQID = QQID
    }
    sendMessage(msg: string): void {
        super.sendMessage(msg)
        console.log(`qq send msg ${this.QQID} : ${msg}`)
    }
}