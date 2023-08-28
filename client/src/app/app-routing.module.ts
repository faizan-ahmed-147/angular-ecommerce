import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Mycomponents/home/home.component';
import { ProductsComponent } from './Mycomponents/products/products.component';
import { CartComponent } from './Mycomponents/cart/cart.component';
import { LoginComponent } from './Mycomponents/login/login.component';
import { SignupComponent } from './Mycomponents/signup/signup.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "register",
    component: SignupComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "cart",
    component: CartComponent
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
