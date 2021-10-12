import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
    productId:number;
    productFormGroup?:FormGroup;
    private submitted:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,
    private productsService:ProductsService,
     private fb:FormBuilder) {
    this.productId=activatedRoute.snapshot.params.id;
   }

  ngOnInit(): void {
    this.productsService.getProducts(this.productId)
    .subscribe(product=>{
      this.productFormGroup=this.fb.group({
        id:[product.id,Validators.required],
       name:[product.name,Validators.required],
      price:[product.price,Validators.required],
      quantity:[product.quantity,Validators.required],
      selected:[product.selected,Validators.required],
      available:[product.available,Validators.required]
    })
  });
  }
  onEditProduct(){
    this.productsService.updateProducts(this.productFormGroup?.value)
    .subscribe(data=>{alert('update success')})

  }
}
