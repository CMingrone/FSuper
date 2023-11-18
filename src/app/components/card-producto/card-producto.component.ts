import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ServicioPrincipalService } from 'src/app/service/servicio-principal.service';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent {
  
  @Input()
  prod! : Producto

  constructor(public servicioPrincipalService : ServicioPrincipalService){

    
  }

  agregarAlCarro(){
    this.servicioPrincipalService.sumarUnidad(this.prod.id_producto)
  }

  vaciarCarro(){
    this.servicioPrincipalService.vaciarCarro()
  }
}
