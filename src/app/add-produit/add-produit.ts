import { Component } from '@angular/core';
import { Produit } from '../model/produit';
import { FormsModule } from '@angular/forms';
import { ProduitService } from '../service/produit';
@Component({
  imports: [FormsModule],
  selector: 'app-add-produit',
  styleUrl: './add-produit.css',
  templateUrl: './add-produit.html',
})
export class AddProduit {

  newProduit: Produit = new Produit();
  constructor(private produitService: ProduitService) {

}
ajouterProduit() {
    this.produitService.ajouterProduit(this.newProduit);
  }
}
