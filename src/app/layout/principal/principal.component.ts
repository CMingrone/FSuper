import { Component } from '@angular/core';
import { ServicioPrincipalService } from 'src/app/service/servicio-principal.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  constructor(public servicioPrincipalService : ServicioPrincipalService){}

  sectorBuscado : string = ""
  repoBuscado : string = ""
  palabraABuscar : string = ""
  sector : boolean = true
  repo : boolean = false

  buscar(){
//prueba del service Click en "Buscar"///
    this.servicioPrincipalService.traerProductos()
///////////////////////////////////////////////
    if (this.sector){
      this.palabraABuscar=this.sectorBuscado
    }else {
      this.palabraABuscar=this.repoBuscado
    }
    console.log(this.palabraABuscar)
  }
  sectorORepo(){
    this.sector = !this.sector
    this.repo = !this.repo
  }
}
