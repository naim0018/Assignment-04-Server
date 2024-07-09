import { StatusCodes } from "http-status-codes"
import { catchAsync } from "../../app/utils/catchAsync"
import { sendResponse } from "../../app/utils/sendResponse"
import { CartService } from "./cart.service"
import { ProductModel } from "../Product/product.model"
import { AppError } from "../../app/error/AppError"
// import { TCartItem } from "./cart.interface"

const createCart =catchAsync(async(req,res)=>{

    const product = await ProductModel.findById({_id:req.params.id})
  
    if(product === null ){
        throw new  AppError(StatusCodes.NOT_FOUND,"Product Controller Product not found")
    }
    if(product.stock !< 0  ){
        throw new  AppError(StatusCodes.NOT_FOUND,"Product out of stock")
    }
    
    const cart ={
        productId : product._id,
        quantity : parseInt(req.query.quantity as string )
    }   

   
    const result = await CartService.createCartData(cart)
    sendResponse(res,{
        success:true,
        statusCode:StatusCodes.OK,
        message:"Cart added successfully",
        data:result
    })
})
const getAllCart =catchAsync(async(req,res)=>{
    const result = await CartService.getAllCartData()
    sendResponse(res,{
        success:true,
        statusCode:StatusCodes.OK,
        message:"Cart fetched successfully",
        data:result
    })
})


export const CartController = {
    createCart,
    getAllCart
}
