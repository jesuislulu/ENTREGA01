import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { AsistenciasComponent } from './pages/asistencias/asistencias.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'formulario', component: FormularioComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'asistencias', component: AsistenciasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
