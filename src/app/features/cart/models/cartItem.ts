import { Products } from "src/app/shared/models/product";

export interface CartItem{
    id?:number,
    product: Products,
    quantity: number,
}