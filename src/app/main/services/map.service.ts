import { Injectable, NgZone, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { Entrega } from '../models/entrega';

declare var google: any;

@Injectable()
export class MapService extends GoogleMapsAPIWrapper {

    constructor(private loader: MapsAPILoader, private zone: NgZone) {
        super(loader, zone);
    }

    resolveEntrega(entrega: Entrega): Observable<any> {
        return Observable.create(
            observer => {
                this.resolveAddress(entrega.endereco.description).subscribe(
                    geocodeResult => {
                        observer.next(geocodeResult);
                        observer.complete();
                    });
            });
    }

    resolveAddress(address: string): Observable<any> {
        console.log('resolveAddress: Getting Address - ', address);
        return Observable.create(observer => {
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode(
                { 'address': address },
                function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        observer.next(results[0]);
                    } else {
                        console.log('resolveAddress: Error - ', results, ' & Status - ', status);
                        observer.next({});
                    }
                    observer.complete();
                });
        });
    }
}
