import { stratergyInterface } from "./interface";

export class addStratergy implements stratergyInterface {
    operation(a: number, b: number): number {
        return a + b
    }
}

export class subStratergy implements stratergyInterface {
    operation(a: number, b: number): number {
        return a - b
    }
}

export class mutplitStratergy implements stratergyInterface {
    operation(a: number, b: number): number {
        return a * b
    }
}

export class diviceStratergy implements stratergyInterface {
    operation(a: number, b: number): number {
        return a / b
    }
}