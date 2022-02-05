import { productService } from 'src/app/_services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/_models/products/product.model';

@Component({
  selector: 'app-listing3',
  templateUrl: './listing3.component.html',
  styleUrls: ['./listing3.component.scss']
})
export class Listing3Component implements OnInit {
  listing3:product[]=[];
  constructor(private _productService: productService) { }

  ngOnInit(): void {
    this.getproduct();
  }
  // getproduct(){
  //   this.listing3= this._productService.getAllProducts();
  // }

}
