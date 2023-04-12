import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FullNamePipe } from '../shared/pipes/full-name.pipe';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent {
  showFiller = false;

  constructor(private router: Router) {}

  navigate(value:number) {
    switch (value) {
      case 1:
        this.router.navigate(['/form']);
        break;
      case 2:
        this.router.navigate(['/students']);
        break;
      default:
        this.router.navigate(['/'])
        break;
    }
  }

}
