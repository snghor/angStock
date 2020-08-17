import { Injectable } from '@angular/core';
import { Produit } from '../shared/produit';

@Injectable()
export class ProductMockService{
  private PRODUCTS: Produit[] = [];
  constructor(){
    const p1: Produit = new Produit('Livre' , 50 , 20) ;
    const p2: Produit = new Produit('Cahier' , 500 , 4.30) ;
    const p3: Produit = new Produit('Stylo' , 200 , 2.20) ;
    this.PRODUCTS.push(p1) ;
    this.PRODUCTS.push(p2) ;
    this.PRODUCTS.push(p3) ;
  }
  public getProducts(): Produit[]{
    return this.PRODUCTS ;
  }
}
