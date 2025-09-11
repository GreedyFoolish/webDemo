import Dep from "./Dep.js";
import Vue from "./Vue.js";
import Watcher from "./Watcher.js";

export function observer(vm: Vue, obj: Record<string, any>): void {
    const dep = new Dep()

    Object.keys(obj).forEach(key => {
        let internalValue = obj[key]
        Object.defineProperty(vm, key, {
            get(): any {
                // 如果有观察者，应该将观察者添加到发布者的观察者列表里面
                if (Dep.target) {
                    dep.addSubscribe(Dep.target)
                }
                return internalValue
            },
            set(newValue: any): void {
                internalValue = newValue
                // 数据发生改变时，调用 notify 通知所有观察者进行更新
                dep.notify()
            }
        })
    })
}

export function compile(vm: Vue): void {
    const el: HTMLElement | null = document.querySelector(vm.$el)
    if (!el) {
        throw new Error("父节点未找到")
    }

    // 创建一个文档碎片
    const documentFragment: DocumentFragment = document.createDocumentFragment()
    /**
     * DocumentFragments 是 DOM 节点。它们不是主 DOM 树的一部分。通常的用例是创建文档片段，将元素附加到文档片段，
     * 然后将文档片段附加到 DOM 树。在 DOM 树中，文档片段被其所有的子元素所代替。
     * 
     * 因为文档片段存在于内存中，并不在 DOM 树中，所以将子元素插入到文档片段时不会引起页面回流（对元素位置和几何上
     * 的计算）。因此，使用文档片段通常会带来更好的性能。
     */

    const reg: RegExp = /\{\{(.*)\}\}/

    while (el.firstChild) {
        const children: ChildNode = el.firstChild
        if (children.nodeType === Node.ELEMENT_NODE) {
            const element: HTMLElement = children as HTMLElement
            if (reg.test(element.innerHTML)) {
                const vmKey: string = RegExp.$1.trim()
                new Watcher(vm, children, vmKey)
            } else {
                // 如果没有插值符号，那么需要检查此元素的属性是否包含 v-model
                Array.from(element.attributes).forEach(attr => {
                    if (attr.name === "v-model") {
                        const vmKey: string = attr.value
                        element.addEventListener("input", (event: Event) => {
                            const target = event.target as HTMLInputElement
                            vm[vmKey] = target.value
                        })
                    }
                })
            }
        } else if (children.nodeType === Node.TEXT_NODE && reg.test(children.nodeValue || "")) {
            // 是文本节点并且包含插值符号，那么需要使其变成一个观察者
            const vmKey: string = RegExp.$1.trim()
            new Watcher(vm, children, vmKey)
        }
        documentFragment.appendChild(children)
    }
    el.appendChild(documentFragment)
}