import { productService } from 'src/app/_services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/_models/products/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product={} as product; 
  relatedProducts!: product[];
  constructor(private activatedRoute: ActivatedRoute,private productService: productService) { }
  ngOnInit(): void {
    console.log(this.product);
   this.getProductById();
   this.getrelatedProducts();
    
  }
  getProductById(){

        this.activatedRoute.params.subscribe((params) => {
        const id= +params['productId'];
         this.product= this.productService.getProductById(id)!;
        console.log( this.product);
        
    })
  }
  getrelatedProducts(){
    this.relatedProducts=this.productService.getAllProducts().splice(0,4)
  }

}
  //  (params) =>{
  //       const id= +params['productId'];
  //       this.product= this.productService.getProductById(id)!;
  //       console.log(this.product);

  //     },
  //     (err)=>{},
  //     ()=>{}


    //   this.activatedRoute.params.subscribe((params) => {
    //     const id= +params['productId'];
    //      this.product= this.productService.getProductById(id)!;
    //     console.log( this.product);
        
    // })