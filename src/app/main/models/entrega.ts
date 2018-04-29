import { Type } from 'class-transformer';
import { Address } from './address';
import { NotaFiscal } from './nota-fiscal';

export class Entrega {

    public destinatario: string;

    @Type(() => Address)
    public endereco: Address;

    public estatus: string;

    @Type(() => Date)
    public data: Date;

    @Type(() => NotaFiscal)
    public notas: NotaFiscal[];
}
