import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelAdministrativoComponent } from './panel-administrativo/panel-administrativo.component';
import { AsistenciaComponent } from './pages/asistencia/asistencia.component';

@NgModule({
    declarations: [
        AppComponent,
        AsistenciaComponent
    ],
        
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        PanelAdministrativoComponent
           
    ],
    providers: [],
    bootstrap: [AppComponent],

})
export class AppModule { }
