import { VueOptions } from "./optionType.js"
import { compile, observer } from "./utils.js"

export default class Vue {
    $el: string
    [key: string]: any
    constructor(options: VueOptions) {
        this.$el = options.el
        // 进行数据劫持，实现响应式
        observer(this, options.data)
        // 对页面进行模板刷新
        compile(this)
    }
}