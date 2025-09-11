import { notifyInterface } from "../interface";

export class baseDecorator implements notifyInterface {
    private notify: notifyInterface
    constructor(notify: notifyInterface) {
        this.notify = notify
    }
    sendMessage(msg: string): void {
        this.notify.sendMessage(msg)
    }
}