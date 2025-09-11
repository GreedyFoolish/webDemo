import { Chair, Sofa, Table } from "./myProduct";

export class ChairB implements Chair {
    sitOn(): string {
        return "创建产品 B 的椅子"
    }
}

export class SofaB implements Sofa {
    lieOn(): string {
        return "创建产品 B 的沙发"
    }
}

export class TableB implements Table {
    putOn(thing: string): string {
        return `创建产品 B 的桌子，桌子上放着 ${thing}`
    }
}