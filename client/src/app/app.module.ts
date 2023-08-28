import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Mycomponents/navbar/navbar.component';
import { HomeComponent } from './Mycomponents/home/home.component';
import { ProductsComponent } from './Mycomponents/products/products.component';
import { LoginComponent } from './Mycomponents/login/login.component';
import { CartComponent } from './Mycomponents/cart/cart.component';
import { FooterComponent } from './Mycomponents/footer/footer.component';
import { SignupComponent } from './Mycomponents/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    CartComponent,
    FooterComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
