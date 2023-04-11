import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelAdministrativoComponent } from './panel-administrativo.component';
import { EditStudentComponent } from ;
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    PanelAdministrativoComponent,
    AlumnosComponent,
    FormulariosComponent,
    EditarDatosComponent
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
  ]
  exports: [
    PanelAdministrativoComponent,
    AlumnosComponent,
    FormulariosComponent,
    EditarDatosComponent
})
export class PanelAdministrativoModule { }
