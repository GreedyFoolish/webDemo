import { collectionInterface, iteratorInterface } from "./interface";
import { myIterator } from "./iterator";
import { myUser } from "./user";

export class myCollection implements collectionInterface<myUser> {
    private userList: Array<myUser>
    constructor() {
        this.userList = []
    }
    addUser(user: myUser) {
        this.userList.push(user)
    }
    createIterator(): iteratorInterface<myUser> {
        return new myIterator(this.userList)
    }
}