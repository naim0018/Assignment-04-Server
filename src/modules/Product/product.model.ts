import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

export const productSchema =  new Schema<TProduct>({
    
    title:{
        type:String,
        required:[true,'Title is required']
    },
    price:{
        type:Number,
        required:[true,'Price is required']
    },
    rating:{
        type:Number,
    },
    img:{
        type:String,
        required:[true,'Image is required']
    },
    stock:{
        type:Number,
        required:[true,"Stock is required"]
    },
    category:{
        type:String,
        required:[true,"Category is required"]
    },
})

export const ProductModel =  model('Product',productSchema)