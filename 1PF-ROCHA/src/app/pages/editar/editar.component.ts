import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ELEMENT_DATA } from 'src/app/constants/constants';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent {
  dataEdit = JSON.parse(this.message);

  nombreControl = new FormControl(this.dataEdit.alumnos.nombre,[Validators.minLength(3),Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/)]);
  apellidoControl = new FormControl(this.dataEdit.alumnos.apellido,[Validators.minLength(3),Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/)]);
  examenControl = new FormControl(this.dataEdit.alumnos.examen,[]);
  alumnosForm: FormGroup;

  
  constructor(public formBuilder: FormBuilder, private dialogRef: MatDialogRef<EditarComponent>, @Inject(MAT_DIALOG_DATA) public message:string) {

    this.alumnosForm = this.formBuilder.group({
      name: this.nombreControl,
      lastName: this.apellidoControl,
      examen: this.examenControl
    });    
  }

  onSubmit(): void {
    if (this.alumnosForm.valid) {
      const beforeAlumnos = this.dataEdit.alumnos;
      const alumno = this.alumnosForm.value;
      const alumnos = this.dataEdit.listAlumnos;
      const index = alumnos.findIndex((s:any) => s.nombre === beforeAlumnos.nombre && s.apellido === beforeAlumnos.apellido);
      if (index >= 0) {
        alumnos[index] = alumno;
        this.dialogRef.close(alumnos)
      } else {
        alert('Por favor inténtelo nuevamente');
      }
    } else {
      alert('Los datos no son válidos');
    }
  }
}
