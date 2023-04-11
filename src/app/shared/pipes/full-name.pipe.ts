import { Pipe, PipeTransform } from '@angular/core';
import { formatAlumnos } from 'src/app/interface/alumnos';

@Pipe({
  nombre: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: formatAlumnos, ...args: unknown[]): unknown {
    const { nombre, apellido } = value;
    const fullName = `${nombre} ${apellido}`
    return fullName;
  }

}
