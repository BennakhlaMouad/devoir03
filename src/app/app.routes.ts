import { Routes } from '@angular/router';
import{Produit} from './produit/produit';
import{AddProduit} from './add-produit/add-produit';

export const routes: Routes = [

 { path: 'produit', component: Produit },
  { path: 'add-produit', component: AddProduit },

];
