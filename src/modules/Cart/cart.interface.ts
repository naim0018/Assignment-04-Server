import { Types } from "mongoose";
import { TProduct } from "../Product/product.interface"




export type TCart = {
    items: Types.ObjectId;
    totalQuantity: number;
    totalPrice: number;
}