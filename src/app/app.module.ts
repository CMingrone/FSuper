import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardProductoComponent } from './components/card-producto/card-producto.component';
import { PrincipalComponent } from './layout/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    CardProductoComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
