import { myCollection } from "./collection";
import { iteratorInterface } from "./interface";
import { myUser } from "./user";

export class myIterator implements iteratorInterface<myUser> {
    private collection: Array<myUser>
    private currentIndex: number
    constructor(collection: Array<myUser>) {
        this.collection = collection
        this.currentIndex = 0
    }
    getNext(): myUser | undefined {
        if (this.hasMore()) {
            return this.collection[this.currentIndex++]
        }
        return undefined
    }
    hasMore(): boolean {
        return this.currentIndex < this.collection.length
    }
}