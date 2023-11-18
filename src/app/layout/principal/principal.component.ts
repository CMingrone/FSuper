import { Component, OnInit } from '@angular/core';
import { CarroProducto } from 'src/app/model/carroProducto';
import { Producto } from 'src/app/model/producto';
import { Repositor } from 'src/app/model/repositor';
import { Sector } from 'src/app/model/sector';
import { ServicioPrincipalService } from 'src/app/service/servicio-principal.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit  {

  productos! : Producto[]
  repositores! : Repositor[]
  sectores! : Sector[]
  carro! : CarroProducto[]


  constructor(public servicioPrincipalService : ServicioPrincipalService){

    
  }
  async ngOnInit() {
    this.repositores = await this.servicioPrincipalService.traerRepositores()
    this.sectores = await this.servicioPrincipalService.traerSectores()
  }

  
  sectorBuscado : string = "Verduleria"
  repoBuscado : string = "Lionel Messi"
  palabraABuscar : string = ""
  sector : boolean = true
  repo : boolean = false

  async buscar(){
    if (this.sector){
      this.palabraABuscar=this.sectorBuscado
      this.productos = await this.servicioPrincipalService.traerProductos(this.palabraABuscar)
      //Aca PalabraABuscar se tiene que usar para la query de busqueda de porducto por sector
    }else {
      this.palabraABuscar=this.repoBuscado
      //Aca PalabraABuscar se tiene que usar para la query de busqueda de porducto por Repositor
      this.productos = await this.servicioPrincipalService.traerProductos(this.palabraABuscar)
    }
    console.log(this.palabraABuscar)
  }


  sectorORepo(){
    this.sector = !this.sector
    this.repo = !this.repo
  }


  async traerProductosDelCarro(){
    this.carro = await this.servicioPrincipalService.traerProductosDelCarro()
  }
  vaciarCarro(){
    this.servicioPrincipalService.vaciarCarro()
  }
}
