import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { products } from 'src/app/model/products.module';
import { ProductsService } from 'src/app/service/products.service';
import { productActionTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$:products[]|null=null;
  constructor(private productsService:ProductsService,private router:Router) { }

  ngOnInit(): void {
  }
  onGetAllProducts(){
    this.productsService.getAllProducts().subscribe(data=>{this.products$=data;
    },err=>{console.log(err);})
  }
  onGetSelectedProducts(){
    this.productsService.getSelectedProducts().subscribe(data=>{this.products$=data;
    },err=>{console.log(err);})
  }
  onGetAvailableProducts(){
    this.productsService.getAvailableProducts().subscribe(data=>{this.products$=data;
    },err=>{console.log(err);})
  }
  onSearch(dataForm: any){
    this.productsService.searchProducts(dataForm.keyword).subscribe(data=>{this.products$=data;
    },err=>{console.log(err);})
  }
  onSelect(p:products){
    this.productsService.select(p).subscribe(data=>{this.onGetAllProducts()})
  }
  onDelete(p:products){
    let v=confirm("voulez vous supp ???");
    if (v==true)
    this.productsService.delete(p).subscribe(data=>{this.onGetAllProducts()})
  }
  onAddProduct(){
    this.router.navigateByUrl("/addd")
  }
  onEdit(p:products){
    this.router.navigateByUrl("/edit/"+p.id);
  }
  onActionEvent($event: any){
    switch ($event.type){
    case productActionTypes.GET_ALL_PRODUCTS:this.onGetAllProducts();break;
    case productActionTypes.GET_SELECTED_PRODUCTS:this.onGetSelectedProducts();break;
    case productActionTypes.GET_AVAILABLE_PRODUCTS:this.onGetAvailableProducts();break;
    case productActionTypes.NEW_PRODUCTS:this.onAddProduct();break
    case productActionTypes.GET_SEARCH_PRODUCTS:this.onSearch($event.payload);break;
    case productActionTypes.LIST_PRODUCTS:this.onSelect($event.payload);break;
    case productActionTypes.Edit_PRODUCTS:this.onEdit($event.payload);break;
    case productActionTypes.DELETE_PRODUCTS:this.onDelete($event.payload);break;
    }

  }
  }



