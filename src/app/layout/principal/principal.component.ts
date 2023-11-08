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
  sector : boolean = true
  repo : boolean = false

  buscar(){
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
