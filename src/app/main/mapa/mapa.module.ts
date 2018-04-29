import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapaComponent } from './mapa.component';
import { InfoWindowContentComponent } from './info-window-content/info-window-content.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule
  ],
  declarations: [
    MapaComponent,
    InfoWindowContentComponent
  ],
  exports: [MapaComponent, InfoWindowContentComponent]
})
export class MapaModule { }
