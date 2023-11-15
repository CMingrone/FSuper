import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { REST_SERVER_URL } from '../util/configuration';
import { Producto } from '../model/producto';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';

@Injectable({
  providedIn: 'root'
})
export class ServicioPrincipalService{

  constructor(private http: HttpClient) {
    console.log('El servicio esta corriendo')
  
  }
  producto = new Producto(0,0,0,"","")

  async traerProductos() {

    const producto$ = this.http.get<Producto[]>(REST_SERVER_URL + "/producto/getAll")
    const producto = await lastValueFrom(producto$)
    console.log(producto)
    return producto
  }
}
