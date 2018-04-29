import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';

import { fuseConfig } from './fuse-config';

import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { FuseSampleModule } from './main/content/sample/sample.module';

import { RotasModule } from './main/content/rotas/rotas.module';

import { AgmCoreModule } from '@agm/core';

const appRoutes: Routes = [
    {
        path: 'sample',
        redirectTo: 'sample'
    },
    {
        path: 'rotas',
        redirectTo: 'rotas'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
        AgmCoreModule.forRoot({ apiKey: 'AIzaSyBJHoiEGfmO9sVBI_3iJbNTW4Qc_dxdnyk', region: 'BR', language: 'pt-BR', libraries: ['places'] }),

        // Fuse Main and Shared modules
        FuseModule.forRoot(fuseConfig),
        FuseSharedModule,
        FuseMainModule,
        FuseSampleModule,
        RotasModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
