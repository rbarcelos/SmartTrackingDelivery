import { Component, OnInit, NgZone, Input, Output, EventEmitter, DoCheck, IterableDiffers, IterableDiffer } from '@angular/core';
import { DataService } from '../services/data.service';
import { MapService } from '../services/map.service';
import { TaskManagerService } from '../services/task-manager.service';
import { PontoMapa } from './ponto-mapa';
import { GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

declare var google: any;

@Component({
    selector: 'mapa-cmp',
    templateUrl: './mapa.component.html',
    styleUrls: ['./mapa.component.css'],
    providers: [DataService, MapService, TaskManagerService]
})
export class MapaComponent implements OnInit, DoCheck {
    @Input('pontos') mapaPontos: Array<PontoMapa>;
    @Output('mapLoaded') mapLoadedEvent: EventEmitter<any> = new EventEmitter();

    isMapLoaded: boolean;
    differ: IterableDiffer<PontoMapa>;

    mapaBounds: any;

    constructor(private loader: MapsAPILoader, differs: IterableDiffers) {
        this.differ = differs.find([]).create(null);
    }

    ngOnInit() {
        this.loadMap().subscribe(() => {
            this.mapaBounds = new google.maps.LatLngBounds();
            this.mapLoadedEvent.emit();
        });
    }

    ngDoCheck() {
        const changes = this.differ.diff(this.mapaPontos);
        if (changes) {
            const newBound = new google.maps.LatLngBounds();
            console.log('new change'); // for splitting up changes
            changes.forEachAddedItem(r => {
                console.log('added ', r);
                newBound.extend(new google.maps.LatLng(r.item.lat, r.item.long));
            });
            changes.forEachRemovedItem(r => console.log('removed ', r));
            changes.forEachMovedItem(r => console.log('moved ', r));
            this.mapaBounds = newBound;
        }
    }

    clickedMarker($event) {
        console.log($event);
    }

    private loadMap() {
        return Observable.create(observer => {
            if (this.isMapLoaded) {
                observer.next({});
                observer.complete();
                console.log('Map already loaded');
            }
            else {
                console.log('Loading Map');
                this.loader.load().then(
                    () => {
                        this.isMapLoaded = true;
                        observer.next({});
                        observer.complete();
                        console.log('Map loaded');
                    });
            }
        });
    }
}


