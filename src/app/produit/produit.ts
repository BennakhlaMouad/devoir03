import { Component } from '@angular/core';
import { Produit as ProduitModel } from '../model/produit';
import { ProduitService } from '../service/produit';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produit',
  imports: [FormsModule],
  templateUrl: './produit.html',
  styleUrl: './produit.css'
})
export class Produit {

  produits: ProduitModel[];
  produitSelectionne: ProduitModel | null = null;

  constructor(private produitService: ProduitService) {
    this.produits = this.produitService.produits;
  }
  modifierProduit(produit: ProduitModel) {
    this.produitSelectionne = produit;

}
supprimerProduit(produit: ProduitModel) {
  this.produitService.supprimerProduit(produit.id);

  if (this.produitSelectionne?.id === produit.id) {
    this.produitSelectionne = null;
  }
}

enregistrerModification() {
  if (this.produitSelectionne) {
    this.produitService.modifierProduit(this.produitSelectionne);
    this.produitSelectionne = null;
  }
}


}