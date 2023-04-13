import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ELEMENT_DATA } from 'src/app/constants/constants';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {
  displayedColumns: string[] = ['nombre', 'examen', 'editar', 'eliminar'];
  dataSource = ELEMENT_DATA;

  constructor(private dialogService: MatDialog) {}
  
  delete(element: any) {
    const index = this.dataSource.indexOf(element);
    if (index !== -1) {
      this.dataSource.splice(index, 1);
    }
    this.dataSource = this.dataSource.slice();
    return this.dataSource;
  }

  dialogEditar(element: any): void {
    const datos = {
      alumnos: element,
      listAlumnos: this.dataSource
    }
    const dialogRef = this.dialogService.open(EditarComponent, {
      data: JSON.stringify(datos)
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.dataSource = result;
      }
    })
  }

}
