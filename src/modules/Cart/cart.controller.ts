import { StatusCodes } from "http-status-codes"
import { catchAsync } from "../../app/utils/catchAsync"
import { sendResponse } from "../../app/utils/sendResponse"
import { CartService } from "./cart.service"

const createCart =catchAsync(async(req,res)=>{
    const result = await CartService.createCartData(req.body)
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
