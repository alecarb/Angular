import { Component } from "@angular/core";

@Component({
    selector : 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css'] 
    
})
export class PersonasComponent{
    deshabilitar = false;
    mensaje = '';
    titulo = "Ingrese titulo"; //aqui muestra el texto predeterminado
    //se va modificando desde el comp.html por medio de la interpolacion  
    mostrar = false;

    agregarPersona(){ //Metodo para agregar persona
        this.mostrar = true;
        this.mensaje = 'Persona Agregada';
    }

}