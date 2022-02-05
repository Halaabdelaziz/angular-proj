import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/_models/products/category.model';
import { PaymentType } from 'src/app/_models/products/payment-Type.model';
import { product } from 'src/app/_models/products/product.model';
import { CategoryService } from 'src/app/_services/product/category.service';
import { PaymentTypeService } from 'src/app/_services/product/payment-type.service';
import { productService } from 'src/app/_services/product/product.service';
import { Tag } from 'src/app/_models/products/tags.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  paymentTypes: PaymentType[] = [];
  categoryArray!: Category[];
  product= {} as product;
  tags: Tag[]= [];
  editMode= false;
  englishMode =true;
  arabicMode = false;
  constructor(
    private productService: productService, 
    private router: Router, 
    private paymentTypeService: PaymentTypeService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    console.log('params', this.activatedRoute.snapshot.params);
    // console.log('url', this.activatedRoute.snapshot.url[0].path);
 
    if(this.activatedRoute.snapshot.url[0].path == 'edit'){
      this.editMode= true;
    }

    if(this.editMode){
      this.getProductById();
    }

    // this.activatedRoute.snapshot.params;
    this.getAllProductTypes();
    this.getAllCategories();
  }

  getProductById(){
    const id= +this.activatedRoute.snapshot.params['productId'];
    this.product= this.productService.getProductById(id)!;
    
  }

  getAllProductTypes() {
    this.paymentTypes = this.paymentTypeService.getAllPaymentTypes();
  }

  getAllCategories(){
    this.categoryArray= this.categoryService.getAllCategories();
  }

  onCheckBoxChanged(index: number){

    if(this.product.paymentType){
    this.product.paymentType= [...this.product.paymentType, this.paymentTypes[index]];
    }else{
      this.product.paymentType= [this.paymentTypes[index]]
    }
     console.log(this.product);
 }

  onAddProduct(form: NgForm) {
   
    const product: product = {
      id:1,
      data:[{name:form.value.name,description:form.value.description,lang:{name:"en"}}],
      price:1000,
      discount:10,
      category:{id:1,name:"baby"},
      tags:[{id:1,name:"nnnn "}],
      paymentType:[{id:1,name:" COD"}]
    } ;
    this.productService.addProduct(product);
    this.router.navigateByUrl('home');
  }
  deleteTag(){

  }
  changeToEngMode(){}
  changeToArMode(){}
}
