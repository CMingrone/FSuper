import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/model/producto';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent {
  
  @Input()
  prod! : Producto
}
