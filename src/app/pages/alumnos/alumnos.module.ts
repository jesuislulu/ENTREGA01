import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditarNotaComponent } from '../editar-nota/editar-nota.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule, 
    EditarNotaComponent
  ]
})
export class AlumnosModule { }
