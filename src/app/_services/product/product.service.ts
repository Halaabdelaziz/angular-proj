import { environment } from './../../../environments/environment.prod';
import { EventEmitter, Injectable } from "@angular/core";
import { AllProductResponse, product, productWithCounter } from "src/app/_models/products/product.model";
import { ProductTwoService } from "./product-two.service";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class productService {
    counter:number=0;
    // productsArray: product[] = [
    //     {
    //         id: 1,
    //         data: [{name: 'camera', description: 'test', lang: { name: 'en' } }],
    //         category: {id:1, name: 'food' },
    //         tags: [{ name: 'food' }],
    //         paymentType: [{ name: 'COD' }],
    //         price: 900, discount: 100, imageUrl: 'https://picsum.photos/200/300'
    //     },

    //     { 
    //         id: 2, 
    //         data: [{name: 'mic', description: 'test', lang: { name: 'en' } }],
    //         category: { name: 'food' },
    //         tags: [{ name: 'food' }],
    //         paymentType: [{ name: 'COD' }],
    //         price: 200, discount: 0, imageUrl: 'https://picsum.photos/200/301' 
    //     },

    //     { 
    //         id: 3, 
    //         data: [{name: 'headphone', description: 'test', lang: { name: 'en' } }],
    //         category: { name: 'Baby' },
    //         tags: [{ name: 'food' }],
    //         paymentType: [{ name: 'COD' }],
    //         price: 800, discount: 80, imageUrl: 'https://picsum.photos/200/302' 
    //     },

    //     { 
    //         id: 4, 
    //         data: [{name: 'glasses', description: 'test', lang: { name: 'en' } }],
    //         category: { name: 'Arts' },
    //         tags: [{ name: 'food' }],
    //         paymentType: [{ name: 'COD' }],
    //         price: 200, discount: 10, imageUrl: 'https://picsum.photos/id/200/303' 
    //     },

    //     { 
    //         id: 5, 
    //         data: [{name: 'watch', description: 'test', lang: { name: 'en' } }],
    //         category: { name: 'Baby' },
    //         tags: [{ name: 'food' }],
    //         paymentType: [{ name: 'COD' }],
    //         price: 800, discount: 10, imageUrl: 'https://picsum.photos/200/304' 
    //     },

    //     { 
    //         id: 6, 
    //         data: [{name: 'ring', description: 'test', lang: { name: 'en' } }],
    //         category: { name: 'Arts' },
    //         tags: [{ name: 'food' }],
    //         paymentType: [{ name: 'COD' }],
    //         price: 500, discount: 0, imageUrl: 'https://picsum.photos/200/305' 
    //     },

    //     { 
    //         id: 7, 
    //         data: [{name: 'bag', description: 'test', lang: { name: 'en' } }],
    //         category: { name: 'food' },
    //         tags: [{ name: 'food' }],
    //         paymentType: [{ name: 'COD' }],
    //         price: 200, discount: 10, imageUrl: 'https://picsum.photos/200/306' 
    //     },

    //     { 
    //         id: 8, 
    //         data: [{name: 'labtop', description: 'test', lang: { name: 'en' } }],
    //         category: { name: 'Arts' },
    //         tags: [{ name: 'food' }],
    //         paymentType: [{ name: 'COD' }],
    //         price: 24000, discount: 500, imageUrl: 'https://picsum.photos/200/307' 
    //     },

    //     { 
    //         id: 9, 
    //         data: [{name: 'shirt', description: 'test', lang: { name: 'en' } }],
    //         category: { name: 'food' },
    //         tags: [{ name: 'food' }],
    //         paymentType: [{ name: 'COD' }],
    //         price: 300, discount: 10, imageUrl: 'https://picsum.photos/200/308' 
    //     },
    // ];

    cartHasBeenChanged: EventEmitter<productWithCounter[]> = new EventEmitter<productWithCounter[]>();
    counterChanged: EventEmitter<number> = new EventEmitter<number>();

    public cartArray: productWithCounter[] = [];
    constructor(private _httpClient: HttpClient ) {}

  
    getAllProducts(): Observable<AllProductResponse>{
       
       return this._httpClient.get<AllProductResponse>(environment.baseUrl + 'product')
    }
    
    getAllProducts(): product[]{
        return this.productsArray;
    }

    getProductById(id: number){
        return this.productsArray.find(product => product.id === id);
    }

    addProduct(product: product) {
        this.productsArray.push(product);
    }
    updateProduct() { }
    deleteProduct() { }
    
    addProductToCart(product: product) {
        const newProduct: productWithCounter = { ...product, cartCounter: 1 };
        if(!this.cartArray.includes(product)){
            this.cartArray.push(product);
            this.counter ++;

            console.log("from service");
            
            console.log(this.counter);
        }
        else{

            this.counter = this.counter+1;
            console.log(this.counter);
        }
        

        // logic
       
        console.log(newProduct);
        
        // this.addedProduct.push(product);

        // this.cartArray.push(newProduct);
        this.cartHasBeenChanged.emit(this.cartArray);
        this.counterChanged.emit(this.counter);

    }
    // counterItem(product:product){
    //     if(!this.cartArray.includes(product)){
          
    //         this.counter=0;
    //         this.counter ++;
    //         console.log(this.counter);
    //     }
    //     else{
    //         this.counter = this.counter+1;
    //         console.log(this.counter);
    //     }
    //    
    // }

}