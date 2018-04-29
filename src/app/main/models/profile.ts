import { Type } from 'class-transformer';
import { Empresa } from './empresa';
export class Profile {

    public name: string;

    public email: string;

    @Type(() => Empresa)
    public empresa: Empresa;

    public locale: string;

    public region: string;

    public isAdmin: boolean;

}
