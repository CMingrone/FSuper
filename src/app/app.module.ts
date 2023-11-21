import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardProductoComponent } from './components/card-producto/card-producto.component';
import { PrincipalComponent } from './layout/principal/principal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TablaComponent } from './layout/tabla/tabla.component';
import { AbmDataTableHeaderComponent } from './components/abm-data-table-header/abm-data-table-header.component';
import { AbmDataTableComponent } from './components/abm-data-table/abm-data-table.component';
import { OrderAbmByNombrePipe } from './pipes/order-abm-by-nombre.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardProductoComponent,
    PrincipalComponent,
    TablaComponent,
    AbmDataTableHeaderComponent,
    AbmDataTableComponent,
    OrderAbmByNombrePipe
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
