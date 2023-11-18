import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardProductoComponent } from './components/card-producto/card-producto.component';
import { PrincipalComponent } from './layout/principal/principal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalCompraComponent } from './components/modal-compra/modal-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    CardProductoComponent,
    PrincipalComponent,
    ModalCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
