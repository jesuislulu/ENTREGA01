import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ELEMENT_DATA } from 'src/app/constants/constants';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.scss']
})
export class EditarNotaComponent {
  dataEdit = JSON.parse(this.message);

  nombreControl = new FormControl(this.dataEditar.nota.nombre,[Validators.minLength(3),Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/)]);
  apellidoControl = new FormControl(this.dataEditar.nota.apellido,[Validators.minLength(3),Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/)]);
  examenControl = new FormControl(this.dataEditar.nota.examen,[]);
  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private dialogRef: MatDialogRef<EditarNotaComponent>, @Inject(MAT_DIALOG_DATA) public message:string) {

    this.registerForm = this.formBuilder.group({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      examen: this.examenControl
    });    
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const beforeAlumnos = this.dataEditar.alumnos;
      const alumnos = this.registerForm.value;
      const alumnos = this.dataEdit.listAlumnos;
      const index = alumnos.findIndex((s:any) => s.nombre === beforeAlumnos.nombre && s.apellido === beforeAlumnos.apellido);
      if (index >= 0) {
        alumnos[index] = alumnos;
        this.dialogRef.close(alumnos)
      } else {
        alert('Por favor inténtalo nuevamente');
      }
    } else {
      alert('El formulario es inválido');
    }
  }
}
