import { productService } from 'src/app/_services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/_models/products/product.model';

@Component({
  selector: 'app-litsing2',
  templateUrl: './litsing2.component.html',
  styleUrls: ['./litsing2.component.scss']
})
export class Litsing2Component implements OnInit {
  listing2: product[]=[];
  constructor(private _productService: productService) { 
    
  }

  ngOnInit(): void {
    this.getproduct();
  }

  getproduct(){
  this.listing2= this._productService.getAllProducts();
  }

}
