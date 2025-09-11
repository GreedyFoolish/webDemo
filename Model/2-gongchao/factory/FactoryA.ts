import { MyFactory } from "./myFactory"
import { Chair, Sofa, Table } from "../product/myProduct"
import { ChairA, SofaA, TableA } from "../product/ProductA";

export class FactoryA implements MyFactory {
    makeChair(): Chair {
        return new ChairA();
    }
    makeSofa(): Sofa {
        return new SofaA()
    }
    makeTable(): Table {
        return new TableA()
    }
}