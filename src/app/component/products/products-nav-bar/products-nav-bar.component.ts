import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NodeStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { ActionEvent, productActionTypes } from 'src/app/state/product.state';



@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})

export class ProductsNavBarComponent implements OnInit {
  @Output() producteventEmitter : EventEmitter<ActionEvent> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onGetAllProducts(){
    this.producteventEmitter.emit({type:productActionTypes.GET_ALL_PRODUCTS,payload:null})
  }
  onGetSelectedProducts(){
    this.producteventEmitter.emit({type:productActionTypes.GET_SELECTED_PRODUCTS,payload:null})
  }
  onGetAvailableProducts(){
    this.producteventEmitter.emit({type:productActionTypes.GET_AVAILABLE_PRODUCTS,payload:null})
  }
  onAddProduct(){
    this.producteventEmitter.emit({type:productActionTypes.NEW_PRODUCTS,payload:null})
  }
  onSearch(dataForm:any){
    this.producteventEmitter.emit({type:productActionTypes.GET_SEARCH_PRODUCTS,payload:dataForm})
  }

}
