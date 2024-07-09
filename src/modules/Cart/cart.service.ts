import { StatusCodes } from "http-status-codes"
import { AppError } from "../../app/error/AppError"
import { catchAsync } from "../../app/utils/catchAsync"
import { TCart } from "./cart.interface"
import { CartModel } from "./cart.model"

const createCartData = async(payload : any )=>{
    const {productId,quantity} = payload
    console.log(payload)
    console.log(productId)
    const productExist = await CartModel.findOne({items:{$elemMatch:{'_id': productId}}})

    console.log(productExist)

    
        return []
}
const getAllCartData =async ()=>{
    const result = await CartModel.find()
   
    return result
}

export const CartService = {
    createCartData,
    getAllCartData
}