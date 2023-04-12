import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsistenciasComponent } from './pages/asistencias/asistencias.component';
import { AdministradorModule } from './administrador/administrador.module';



@NgModule({
  declarations: [
    AppComponent,
    AsistenciasComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AdministradorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
