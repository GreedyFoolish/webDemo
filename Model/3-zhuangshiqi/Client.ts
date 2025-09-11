import { baseDecorator } from "./decorator/baseDecorator";
import { myEmail } from "./email";
import { myQQ } from "./decorator/qqDecorator";
import { myWechat } from "./decorator/wechatDecorator";

const email = new myEmail(["123@qq.com", "345@qq.com"])
const andQQ = new myQQ(email, "115")
const andWechat = new myWechat(andQQ, "787")
andWechat.sendMessage("123")