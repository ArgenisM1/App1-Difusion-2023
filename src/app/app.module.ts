import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PagesComponent } from './componentes/pages/pages.component';
import { DatosComponent } from './componentes/pages/Datos/datos.component';
import { GaleriaComponent } from './componentes/pages/Galeria/galeria.component';
import { InicioComponent } from './componentes/pages/Inicio/inicio.component';
import { MapasComponent } from './componentes/pages/Mapas/mapas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagesComponent,
    DatosComponent,
    GaleriaComponent,
    InicioComponent,
    MapasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
