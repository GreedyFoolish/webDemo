import { myObserver } from "./observer";
import { myProxy } from "./proxy";
import { myPublisher } from "./publish";

const proxy = new myProxy()

const publisher = new myPublisher(proxy)

const ob1 = new myObserver(proxy, "1")
const ob2 = new myObserver(proxy, "2")
const ob3 = new myObserver(proxy, "3")
const ob4 = new myObserver(proxy, "4")

ob1.addObserver("动作片")
ob2.addObserver("动作片")
ob3.addObserver("恐怖片")
ob4.addObserver("恐怖片")
ob4.addObserver("动作片")

publisher.publish("动作片","捕风捉影上线")
console.log("-----------------")
publisher.publish("恐怖片","死神来了5重映")
console.log("-----------------")

ob1.removeObserver("动作片")
ob1.removeObserver("恐怖片")

publisher.publish("动作片","警察故事重映")