import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Mycomponents/navbar/navbar.component';
import { HomeComponent } from './Mycomponents/home/home.component';
import { ProductsComponent } from './Mycomponents/products/products.component';
import { LoginComponent } from './Mycomponents/login/login.component';
import { CartComponent } from './Mycomponents/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
