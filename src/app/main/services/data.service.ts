import { Injectable } from '@angular/core';
import { Rota } from '../models/rota';
import { Empresa } from '../models/empresa';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { plainToClass } from 'class-transformer';

import * as Collections from 'typescript-collections';

@Injectable()
export class DataService {

    private cachedEmpresas: Observable<Empresa[]>;

    constructor(private http: Http) { }

    public retrieveRotas(): Observable<Rota> {
        return this.http.get('assets/data/rotas.json')
            .map(res => res.json())
            .catch(this.handleError);
    }

    public retrieveEmpresas(): Observable<Empresa[]> {
        if (this.cachedEmpresas == null) {
            this.cachedEmpresas = this.http.get('assets/data/empresas.json')
                .map(res => res.json())
                .map(res => plainToClass(Empresa, res as Object[]))
                .catch(this.handleError);
        }

        return this.cachedEmpresas;
    }

    private extractData(res: Response) {
        const body = res.json();
        return body || null;
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}
