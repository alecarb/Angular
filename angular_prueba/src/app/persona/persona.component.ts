import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  nombre : string = "Ale";
  apellido: string = "Carb";
  private edad : number = 38;

  getEdad(): number{
    return this.edad
  }

  



}
