import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ItemsComponent } from './core/product_features/items/items.component';
import { ListingComponent } from './core/product_features/listing/listing.component';
import { DropDownComponent } from './shared/drop-down/drop-down.component';
import { ProductDetailsComponent } from './core/product-features/product-details/product-details.component';
import { ProductFormComponent } from './core/product-features/product-form/product-form.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { productService } from './_services/product/product.service';
import { LoginFormComponent } from './core/product-features/login-form/login-form.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Litsing2Component } from './core/product_features/litsing2/litsing2.component';
import { Listing3Component } from './core/product_features/listing3/listing3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemsComponent,
    ListingComponent,
    DropDownComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    NotFoundComponent,
    LoginFormComponent,
    Litsing2Component,
    Listing3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClient,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
