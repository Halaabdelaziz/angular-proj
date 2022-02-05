import { CategoryService } from 'src/app/_services/product/category.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { product } from 'src/app/_models/products/product.model';
import { productService } from 'src/app/_services/product/product.service';
import { Category } from 'src/app/_models/products/category.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  productsArray: product[] = [];
  category: string = '';
  categoryArray: product[] = [];
  test!:boolean;
  @Output()
  itemAdded: EventEmitter<product> = new EventEmitter<product>();

  constructor(
    private productService: productService,
    private _categoryService: CategoryService
  ) {
    
  }
  // this.productService.getAllProducts().subscribe((res)=>{
  //   this.productsArray=res.product;
  // });

  ngOnInit(): void {
    // this.productsArray = this.productService.getAllProducts();
  }

  getCategoriedProducts() {
    this.test=true;
    this.category = this._categoryService.categoryArray[0].name;
   
    this.productService.productsArray.map((item) => {
      if(item.category.name == 'Arts') {
        this.categoryArray.push(item);
      }
      
    });
    console.log(this.categoryArray);
  }
}

// onItemAddedToCart(product: product){
//   console.log(product);
//   this.itemAdded.emit(product);
// }

// }
