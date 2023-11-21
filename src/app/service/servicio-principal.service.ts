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

  constructor(private http: HttpClient){}

  producto = new Producto(0,"","","")

  async getProductosBySector(palabraFiltro : String) {
    const producto$ = this.http.get<Producto[]>(REST_SERVER_URL + "/producto/getByDescSector/" + palabraFiltro)
    const producto = await lastValueFrom(producto$)
    return producto
  }

  async getByNombreRepositor(palabraFiltro : String) {
    const producto$ = this.http.get<Producto[]>(REST_SERVER_URL + "/producto/getByNombreRepositor/" + palabraFiltro)
    return await lastValueFrom(producto$)
  }
  
  async traerSectores() {
    const sector$ = this.http.get<Sector[]>(REST_SERVER_URL + "/sector/getAll")
    return await lastValueFrom(sector$)
  }
  
  async traerRepositores() {
    const repo$ = this.http.get<Repositor[]>(REST_SERVER_URL + "/repositor/getAll")
    return await lastValueFrom(repo$)
  }
}
