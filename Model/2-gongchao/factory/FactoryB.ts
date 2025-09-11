import { MyFactory } from "./myFactory";
import { Chair, Sofa, Table } from "../product/myProduct";
import { ChairB, SofaB, TableB } from "../product/ProductB";

export class FactoryB implements MyFactory {
    makeChair(): Chair {
        return new ChairB()
    }
    makeSofa(): Sofa {
        return new SofaB()
    }
    makeTable(): Table {
        return new TableB()
    }
}