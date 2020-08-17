import { Component, OnInit } from '@angular/core';
import {ProductMockService} from './product.mock.service' ;
import { Produit } from '../shared/produit';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  produits: Produit[] ;
  constructor(private productService: ProductMockService) { }

  ngOnInit(): void {
    this.produits = this.productService.getProducts() ;
  }

}
