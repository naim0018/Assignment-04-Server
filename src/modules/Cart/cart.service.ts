import { catchAsync } from "../../app/utils/catchAsync"
import { TCart } from "./cart.interface"
import { CartModel } from "./cart.model"

const createCartData = async(payload:TCart)=>{
    const cartExist  = await CartModel.findByIdAndUpdate({_id:payload._id},{})
    const result = await CartModel.create(payload)
    return result
}
const getAllCartData =async ()=>{
    const result = await CartModel.find()
    return result
}

export const CartService = {
    createCartData,
    getAllCartData
}