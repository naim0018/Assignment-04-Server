import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../app/utils/catchAsync";
import { sendResponse } from "../../app/utils/sendResponse";
import { ProductService } from "./product.service";
import { AppError } from "../../app/error/AppError";

const createProduct =  catchAsync(async (req,res)=>{
    
    const result = await ProductService.createProductData(req.body)
    // console.log(result)
    sendResponse(res,{
        success:true,
        statusCode:StatusCodes.OK,
        message:"Product created successfully",
        data:result
    })
})

const getAllProduct =  catchAsync(async (req,res)=>{
    
    const result = await ProductService.getAllProductData(req.query)

    if(result.length === 0){
        throw new AppError(StatusCodes.NOT_FOUND,"No data found")
    }

    sendResponse(res,{
        success:true,
        statusCode:StatusCodes.OK,
        message:"Product fetched successfully",
        data:result
    })
})
const getSingleProduct =  catchAsync(async (req,res)=>{
    const result = await ProductService.getSingleProductData(req.params.id)
    if(result === null){
        throw new AppError(StatusCodes.NOT_FOUND,"No data found")
    }
    sendResponse(res,{
        success:true,
        statusCode:StatusCodes.OK,
        message:"Product fetched successfully",
        data:result
    })
})

const updateProductData =  catchAsync(async (req,res)=>{
    console.log(req.params.id,req.body)
    const result = await ProductService.updateProductData( req.params.id,req.body)
    sendResponse(res,{
        success:true,
        statusCode:StatusCodes.OK,
        message:"Product updated successfully",
        data:result
    })
})

const deleteProductData =  catchAsync(async (req,res)=>{
    console.log(req.params.id)
    const result = await ProductService.deleteProductData(req.params.id)
    sendResponse(res,{
        success:true,
        statusCode:StatusCodes.OK,
        message:"Product deleted successfully",
        data:result
    })
})

export const ProductController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProductData,
    deleteProductData,

}