import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelAdministrativoComponent } from './panel-administrativo.component';
import { EditarNotaComponent } from '../pages/editar-nota/editar-nota.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog'; 
import { AlumnosComponent } from '../pages/alumnos/alumnos.component';
import { PipesModule } from '../shared/pipes/pipes.module';
import { FormulariosComponent } from '../pages/formularios/formularios.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    PanelAdministrativoComponent,
    AlumnosComponent,
    FormulariosComponent,
    EditarNotaComponent
   
  ],

  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    AppRoutingModule
  ],

  exports: [
    PanelAdministrativoComponent,
    AlumnosComponent,
    FormulariosComponent,
    EditarNotaComponent  
  ],  
  entryComponents: [
    EditarNotaComponent
  ]
})
export class PanelAdministrativoModule { }
