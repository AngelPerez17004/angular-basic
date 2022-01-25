import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: 'contador.component.html',
})
export class ContadorComponent {
  title = 'bases';
  base  : number = 5;
  numero : number = 10;

  acumular(valor:number){

    this.numero += valor;
  }

}
