import { model, Schema } from "mongoose";
import { productSchema } from "../Product/product.model";

const CartItemSchema: Schema = new Schema({
    product: { type: productSchema, required: true },
    quantity: { type: Number, required: true },
  });
const cartSchema =new Schema({
    _id:{ type: Number, required: true },
    items: [CartItemSchema],
    totalQuantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
})


export const CartModel = model('Cart',cartSchema)