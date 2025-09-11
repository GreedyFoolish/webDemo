import { Chair, Sofa, Table } from "../product/myProduct"

export interface MyFactory {
    makeChair(): Chair
    makeSofa(): Sofa
    makeTable(): Table
}