import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  nombre :string = "Iroman";
  edad:number = 25;

  get getNombre(){
    return this.nombre.toUpperCase();
  }
  obtenerNombre():string{
    return `${this.nombre} - ${this.edad}`;

  }

  cambiarNombre():void{

    this.nombre = 'SPIDERMAN';
  }
}
