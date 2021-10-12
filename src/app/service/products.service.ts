import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { products } from "../model/products.module";

const url = 'http://localhost:3000/';
@Injectable({providedIn:"root"})
export class ProductsService{
constructor(private http:HttpClient){
}
getAllProducts():Observable<products[]>{
  return this.http.get<products[]>(url+"products")
}
getSelectedProducts():Observable<products[]>{
  return this.http.get<products[]>(url+"products?selected=true")
}
getAvailableProducts():Observable<products[]>{
  return this.http.get<products[]>(url+"products?available=true")
}
searchProducts(keyword:string):Observable<products[]>{
  return this.http.get<products[]>(url+"products?name_like="+keyword)
}
select(product:products):Observable<products>{
  product.selected=!product.selected;
  return this.http.put<products>(url+"products/"+product.id,product);
}
delete(product:products):Observable<void>{
  product.selected=!product.selected;
  return this.http.delete<void>(url+"products/"+product.id);
}
save(product:products):Observable<products>{
  return this.http.post<products>(url+"products",product);
}
edit(product:products):Observable<products>{
  return this.http.post<products>(url+"products",product.id);
}
getProducts(id:number):Observable<products>{
  return this.http.get<products>(url+"products/"+id)
}
updateProducts(product:products):Observable<products[]>{
  return this.http.put<products[]>(url+"products/"+product.id,product)
}
}
