import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { MapaModule } from '../../mapa/mapa.module';
import { RotasComponent } from './rotas.component';


const routes = [
    {
        path: 'rotas',
        component: RotasComponent
    }
];

@NgModule({
    declarations: [
        RotasComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MapaModule,
        TranslateModule,
        FuseSharedModule
    ],
    exports: [
        RotasComponent
    ]
})

export class RotasModule {
}
