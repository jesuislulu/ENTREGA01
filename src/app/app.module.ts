import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelAdministrativoModule } from './panel-administrativo/panel-administrativo.module';
import { FormulariosComponent } from './pages/formularios/formularios.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulariosComponent,
    AlumnosComponent,
  

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
