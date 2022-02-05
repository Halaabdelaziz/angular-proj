import { LoginFormComponent } from './core/product-features/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './core/product-features/product-details/product-details.component';
import { ProductFormComponent } from './core/product-features/product-form/product-form.component';
import { ListingComponent } from './core/product_features/listing/listing.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { Litsing2Component } from './core/product_features/litsing2/litsing2.component';
import { Listing3Component } from './core/product_features/listing3/listing3.component';

const routes: Routes = [
  {path: '', component: ListingComponent},
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: 'product', children:[
  {path: 'listing', component: ListingComponent},
  {path: 'details/:productId', component: ProductDetailsComponent},
  {path: 'add', component: ProductFormComponent},
  {path: 'edit/:productId', component: ProductFormComponent},
  ]},
  {path:'login',component:LoginFormComponent},
  {path:'listing',component:ListingComponent},
  {path:'listing2',component:Litsing2Component},
  {path:'listing3',component:Listing3Component},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
