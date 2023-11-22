import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/model/producto';
import { Repositor } from 'src/app/model/repositor';
import { Sector } from 'src/app/model/sector';
import { ServicioPrincipalService } from 'src/app/service/servicio-principal.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  productos! : Producto[]
  repositores! : Repositor[]
  sectores! : Sector[]
  
  buscar = ''
  listaItems : Array<any> = []
  cantidadRegistros : number = 0
  cantidadPaginas : number[] = []
  currentRegistro : number = 0
  nombreItemModal = ""
  tituloModal = ""
  botonModal = ""

  constructor(public servicioPrincipalService : ServicioPrincipalService, private router : Router) { }

  async ngOnInit(): Promise<void> {
    this.repositores = await this.servicioPrincipalService.traerRepositores()
    this.sectores = await this.servicioPrincipalService.traerSectores()

    
    this.cantidadPaginas = new Array<number>(Math.trunc(this.listaItems.length / 11) + 1)
  }

  async getProductosBySector(palabraABuscar : any){
    this.productos = await this.servicioPrincipalService.getProductosBySector(palabraABuscar)
    this.listaItems = this.productos
    this.cantidadRegistros = this.listaItems.length
  }

  async getByNombreRepositor(palabraABuscar : any){
    this.productos = await this.servicioPrincipalService.getByNombreRepositor(palabraABuscar)
    this.listaItems = this.productos
    this.cantidadRegistros = this.listaItems.length
  }

  updateCurrentRegistro(registro: number){
    this.currentRegistro = registro
  }

  updateCantidadPaginas(cantidadPaginas: number[]){
    this.cantidadPaginas = cantidadPaginas
  }


}
