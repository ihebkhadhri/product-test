import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { products } from 'src/app/model/products.module';
import { ActionEvent, productActionTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() productsInput$:products[]|null=null;
  @Output() producteventEmitter : EventEmitter<ActionEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(p:products){
    this.producteventEmitter.emit({type:productActionTypes.LIST_PRODUCTS,payload:p})
  }
  onDelete(p:products){
    this.producteventEmitter.emit({type:productActionTypes.DELETE_PRODUCTS,payload:p})
  }
  onEdit(p:products){
    this.producteventEmitter.emit({type:productActionTypes.Edit_PRODUCTS,payload:p})

  }

}
