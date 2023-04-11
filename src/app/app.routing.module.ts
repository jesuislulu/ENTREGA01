import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { AsistenciaComponent } from './pages/asistencia/asistencia.component';
import { FormulariosComponent } from './pages/formularios/formularios.component';

const routes: Routes = [
  { path: '', redirectTo: '/alumnos', pathMatch: 'full' },
  { path: 'formularios', component: FormulariosComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'asistencia', component: AsistenciaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
