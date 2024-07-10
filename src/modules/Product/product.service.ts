import { TProduct } from "./product.interface"
import { ProductModel } from "./product.model"

const getAllProductData =async(payload:Record<string, any>)=>{
    const result = await ProductModel.find()
    return result
}
const getSingleProductData =async(id:string)=>{
   
    const result = await ProductModel.findById({_id:id})
    console.log(result)
    return result
}
const createProductData =async(payload:TProduct)=>{
    const result = await ProductModel.create(payload)
    return result
}
const updateProductData =async(id:string,payload:TProduct)=>{
    const result = await ProductModel.findByIdAndUpdate({_id:id},payload,{new:true})
    return result
}
const deleteProductData =async(id:string)=>{
    const result = await ProductModel.findByIdAndDelete({_id:id})
    return result
}


export const ProductService ={
    createProductData,
    updateProductData,
    getAllProductData,
    getSingleProductData,
    deleteProductData
}