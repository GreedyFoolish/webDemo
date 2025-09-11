import { Chair, Sofa, Table } from "./myProduct";

export class ChairA implements Chair {
    sitOn(): string {
        return "创建产品 A 的椅子"
    }
}

export class SofaA implements Sofa {
    lieOn(): string {
        return "创建产品 A 的沙发"
    }
}

export class TableA implements Table {
    putOn(thing: string): string {
        return `创建产品 A 的桌子，桌子上放着 ${thing}`
    }
}