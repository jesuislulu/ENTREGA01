import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ELEMENT_DATA } from 'src/app/constants/constants';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  nombreControl = new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/)]);
  apellidoControl = new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/)]);

  alumnosForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private router:Router) {

    this.alumnosForm = this.formBuilder.group({
      nombre: this.nombreControl,
      apellido: this.apellidoControl
    });
  }


  onSubmit(): void {
        if (this.alumnosForm.valid) {
      const { name, lastName } = this.alumnosForm.value;
      const newFormat = {
        nombre: name,
        apellido: lastName,
        examen: false
      }
      ELEMENT_DATA.push(newFormat);
      alert('El Alumno ha sido registrado correctamente.');
      this.router.navigate(['/alumnos']);
    } else {
      alert('El registro no es válido.');
    }
  }
}

