import { Type } from 'class-transformer';
import { Entrega } from './entrega';

export class Rota {

    public id: string;

    @Type(() => Date)
    public dataInicio: Date;

    public estatus: string;

    public operador: string;

    public descricao: string;

    public emissor: string;

    @Type(() => Date)
    public entregas: Entrega[];
}
