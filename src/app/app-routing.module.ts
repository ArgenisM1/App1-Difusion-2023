import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ InicioComponent } from './componentes/pages/Inicio/inicio.component';
import{ GaleriaComponent } from './componentes/pages/Galeria/galeria.component';
import{ DatosComponent } from './componentes/pages/Datos/datos.component';
import{ MapasComponent } from './componentes/pages/Mapas/mapas.component';

const routes: Routes = [
  {path:'Inicio',component:InicioComponent},
  {path:'Galeria',component:GaleriaComponent},
  {path:'Datos',component:DatosComponent},
  {path:'Mapas',component:MapasComponent},
  {path:'**',component:InicioComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
