import { myCollection } from "./collection";
import { myUser } from "./user";

export class Client {
    private collection: myCollection
    constructor() {
        this.collection = new myCollection()
    }
    addUser(name: string) {
        this.collection.addUser(new myUser(name))
    }
    getUserList() {
        return this.collection.createIterator()
    }
}

const client = new Client()
client.addUser("123")
client.addUser("234")
client.addUser("567")
const list = client.getUserList()
while (list.hasMore()) {
    console.log("item", list.getNext()?.name)
}