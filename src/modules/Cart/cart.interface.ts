import { TProduct } from "../Product/product.interface"

export type TCartItem={
    product:TProduct,
    quantity:number
}

export  type TCart ={
    _id:string,
    items:TCartItem[],
    totalQuantity:number,
    totalPrice:number
}