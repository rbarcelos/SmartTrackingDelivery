import { EmpresaType } from "./empresa-type.enum";
import { Exclude } from "class-transformer";

export class Empresa {

    public id: string;
    public name: string;

    public type: EmpresaType;

    get typeAsString(): string {
        return EmpresaType[this.type].toLowerCase();
    }
}
