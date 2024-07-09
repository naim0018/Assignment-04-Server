import { model, Schema } from "mongoose";



const cartSchema = new Schema({
    items:{
        type:Schema.ObjectId,
        ref:"Product",
        required:true
    },
    totalQuantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true }
});

export const CartModel = model('Cart',cartSchema)