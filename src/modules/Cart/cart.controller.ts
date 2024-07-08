import { catchAsync } from "../../app/utils/catchAsync"
import { CartService } from "./cart.service"

const createCart =catchAsync(async(req,res)=>{
    const result = await CartService.createCartData(req.body)
    return result
})
const getAllCart =catchAsync(async(req,res)=>{
    const result = await CartService.getAllCartData()
    return result
})


export const CartController = {
    createCart,
    getAllCart
}
