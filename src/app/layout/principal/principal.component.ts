import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  sectorBuscado : string = ""
  repoBuscado : string = ""
  palabraABuscar : string = ""

  buscar(){
    console.log(this.palabraABuscar)
  }
  seleccionar(valor : string){
    this.palabraABuscar = valor
  }
}
