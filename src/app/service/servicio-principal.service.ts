import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { REST_SERVER_URL } from '../util/configuration';
import { Producto } from '../model/producto';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { Sector } from '../model/sector';
import { Repositor } from '../model/repositor';

@Injectable({
  providedIn: 'root'
})
export class ServicioPrincipalService{

  constructor(private http: HttpClient) {
    console.log('El servicio esta corriendo')
  
  }
  producto = new Producto(0,0,0,"","")

  async traerProductos(palabraFiltro : String) {

    const producto$ = this.http.get<Producto[]>(REST_SERVER_URL + "/producto/getAll/" + palabraFiltro)
    const producto = await lastValueFrom(producto$)
    console.log("Hay que hacer la querie en el back xq esta trayendo todos")
    console.log(this.producto)
    return producto
  }
  async traerSectores() {

    const sector$ = this.http.get<Sector[]>(REST_SERVER_URL + "/sector/getAll")
    const sector = await lastValueFrom(sector$)
    console.log(sector)
    return sector
  }
  async traerRepositores() {

    const repo$ = this.http.get<Repositor[]>(REST_SERVER_URL + "/repositor/getAll")
    const repo = await lastValueFrom(repo$)
    console.log(repo)
    return repo
  }
}
