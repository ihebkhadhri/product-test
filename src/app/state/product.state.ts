export enum productActionTypes{
GET_ALL_PRODUCTS="[Product] Get All products",
GET_SELECTED_PRODUCTS="[Product] Get Selected products",
GET_AVAILABLE_PRODUCTS="[Product] Get Available products",
GET_SEARCH_PRODUCTS="[Product] Search products",
NEW_PRODUCTS="[Product] New products",
Edit_PRODUCTS="[Product] Edit products",
LIST_PRODUCTS="[Product] List products",
DELETE_PRODUCTS="[Product] Delete products",
}
export interface ActionEvent{
  type:productActionTypes,
  payload?:any
}
