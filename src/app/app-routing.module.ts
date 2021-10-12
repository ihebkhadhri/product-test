import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { ProductsComponent } from './component/products/products.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"addd",component:ProductAddComponent},
  {path:"edit/:id",component:ProductEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
