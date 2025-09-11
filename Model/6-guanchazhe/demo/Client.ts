import { myObserver } from "./observer";
import { myPublisher } from "./publish";


const ob1 = new myObserver("1")
const ob2 = new myObserver("2")
const ob3 = new myObserver("3")

const publisher = new myPublisher()

// 添加观察者
publisher.addObserver(ob1)
publisher.addObserver(ob2)
publisher.addObserver(ob3)

// 发布消息
publisher.notifyObserver("测试")

console.log("-------------------")

// 移除观察者
publisher.removeObserver(ob2)

// 进行数据测试
publisher.notifyObserver("回收数据")
