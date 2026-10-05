import { Injectable } from '@angular/core';
import { Produit } from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits: Produit[] = [
    {
      id: 1,
      nom: 'Dior Sauvage',
      prix: 250,
      marque: 'Dior'
    },
    {
      id: 2,
      nom: 'Bleu de Chanel',
      prix: 300,
      marque: 'Chanel'
    },
    {
      id: 3,
      nom: 'Eros',
      prix: 220,
      marque: 'Versace'
    }
  ];

  ajouterProduit(produit: Produit) {
    this.produits.push(produit);
  }
  modifierProduit(produit: Produit) {
    const index = this.produits.findIndex(p => p.id === produit.id);
    this.produits[index] = produit;

}
supprimerProduit(id: number) {
  const index = this.produits.findIndex(p => p.id === id);
  if (index !== -1) {
    this.produits.splice(index, 1);
  }
}



}