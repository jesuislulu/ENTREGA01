import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FullNamePipe } from '../shared/pipes/full-name.pipe';


@Component({
  selector: 'app-panel-administrativo',
  templateUrl: './panel-administrativo.component.html',
  styleUrls: ['./panel-administrativo.component.scss']
})
export class PanelAdministrativoComponent {
  showFiller = false;

  constructor(private router: Router) {}

  navigate(value:number) {
    switch (value) {
      case 1:
        this.router.navigate(['/formularios']);
        break;
      case 2:
        this.router.navigate(['/alumnos']);
        break;
      default:
        this.router.navigate(['/'])
        break;
    }
  }
}
