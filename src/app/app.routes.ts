import { Routes } from '@angular/router';
import { Inicio } from './feature/inicio/inicio';  
import { Nosotros } from './feature/nosotros/nosotros';  
import { CatalogoComponent } from './feature/catalogo/catalogo';  
import { DetallesComponent } from './feature/detalles/detalles';  

export const routes: Routes = [
  {
    path: 'home',  
    component: Inicio  
  },
  {
    path: 'nosotros', 
    component: Nosotros  
  },
  {
    path: 'catalogo', 
    component: CatalogoComponent  
  },
  {
    path: 'detalle',  
    component: DetallesComponent 
  },
  {
    path: '',  
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

