import { notifyInterface } from "./interface";

export class myEmail implements notifyInterface {
    private emailList: Array<string>
    constructor(emailList: Array<string>) {
        this.emailList = emailList
    }
    sendMessage(msg: string): void {
        for (const email of this.emailList) {
            console.log(`email send msg ${email} : ${msg}`)
        }
    }
}