import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ELEMENT_DATA } from 'src/app/constants/constants';
import { EditarNotaComponent } from '../editar-nota/editar-nota.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent 
{
  displayedColumns: string[] = ['nombre', 'examen', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;

  constructor(private dialogService: MatDialog) {}
  
  delete(element: any) 
  {
    const index = this.dataSource.indexOf(element);
    if (index !== -1) {
      this.dataSource.splice(index, 1);
    }
    this.dataSource = this.dataSource.slice();
    return this.dataSource;
    }
    
    dialogEditarNota(element: any): void 
    {
    const datos = 
    {
      alumno: element,
      listAlumno: this.dataSource
    }
    const dialogRef = this.dialogService.open(EditarNotaComponent, 
    {

      data: JSON.stringify(datos)

    }
    );

    dialogRef.afterClosed().subscribe(result => 
    {
      if(result) 
      {
        this.dataSource = result;
      }
    }
    )
  }
}
