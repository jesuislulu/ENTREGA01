import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ELEMENT_DATA } from 'src/app/constants/constants';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent {
  
  nombreControl = new FormControl(
    '',
    [
      Validators.required, 
      Validators.minLength(3),
      Validators.maxLength(10)
    ]
  );

  apellidoControl = new FormControl(
    '',
    [
      Validators.required, 
      Validators.minLength(3),
      Validators.maxLength(10)
    ]
    );

  formularioRegistro: FormGroup;

  constructor(public formBuilder: FormBuilder, private router:Router) {

    this.formularioRegistro = this.formBuilder.group({
      nombre: this.nombreControl,
      apellido: this.apellidoControl
    });
  }


  onSubmit(): void {
    if (this.formularioRegistro.valid) {
      const { nombre, apellido } = this.formularioRegistro.value;
      const newFormat = {
        nombre,
        apellido,
        examen: false
      }
      ELEMENT_DATA.push(newFormat);
      alert('El registro ha sido registrado exitosamente');
      this.router.navigate(['/alumnos']);
    } else {
      alert('El registro no es válido');
    }
  }
}

