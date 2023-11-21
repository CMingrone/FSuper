import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Repositor } from 'src/app/model/repositor';
import { Sector } from 'src/app/model/sector';

@Component({
  selector: 'app-abm-data-table-header',
  templateUrl: './abm-data-table-header.component.html',
  styleUrls: ['./abm-data-table-header.component.css']
})
export class AbmDataTableHeaderComponent implements OnInit {

  buscar : string = ''
  currentRegistro : number = 0
  currentPagina : number = 1
  classes : String = ""

  @Input()
  repositores! : Repositor[]

  @Input()
  sectores! : Sector[]

  repositorElegido : string = ""
  sectorElegido : string = ""

  @Input()
  listaItems : Array<any> = []
  
  @Input()
  cantidadPaginas : number[] = []

  @Input()
  cantidadRegistros : number[] = []

  @Output() 
  outputCurrentRegistro = new EventEmitter<number>();

  @Output() 
  outputGetProductosBySector = new EventEmitter<string>();

  @Output() 
  outputGetProductosByNombreRepositor = new EventEmitter<string>();

  constructor(){}
  
  ngOnInit() {

  }

  siguiente(){
    if(this.currentRegistro >= 0 && this.currentRegistro < (this.cantidadPaginas.length -1) * 10){
      this.currentRegistro += 10
      this.currentPagina += 1
      this.outputRegistro()
    }
  }

  atras(){
    if(this.currentRegistro > 0 && this.currentRegistro <= (this.cantidadPaginas.length -1) * 10){
      this.currentRegistro -= 10
      this.currentPagina -= 1
      this.outputRegistro()
    }
  }

  irPagina(pagina : number){
    this.currentRegistro = (pagina - 1 ) * 10
    this.currentPagina = pagina
    this.outputRegistro()
  }

  actualizarCantidadPaginas(){
    this.currentPagina = 1
    this.currentRegistro = 0
    
    this.cantidadPaginas = new Array<number>(
      Math.trunc(
        this.listaItems.filter(it => it.contiene(this.buscar)).length / 10) + 1)
    
    this.outputRegistro()
  }

  outputRegistro() {
    this.outputCurrentRegistro.emit(this.currentRegistro);
  }

  getProductosBySector(){
    this.outputGetProductosBySector.emit(this.sectorElegido);

  }

  getProductosByNombreRepositor() {
    this.outputGetProductosByNombreRepositor.emit(this.repositorElegido);
  }

}
