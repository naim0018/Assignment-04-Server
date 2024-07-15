import { TProduct } from "./product.interface"
import { ProductModel } from "./product.model"

const getAllProductData =async(payload:Record<string, any>)=>{
    const queryObj = {...payload}
    

    let search = ''
    let sort = 'price'

    if(payload.search){
        search = payload.search
    }
    if(payload.sort){
        sort = payload.sort
    }
  
    const excludeField = ['search','sort'] 
      excludeField.forEach(el=> delete queryObj[el])
      


    const searchField = ['title','category']
    const searchQuery = ProductModel.find({
        $or:searchField.map((field)=>({
            [field]:{$regex:search, $options:'i'}
        }))
    })

    const searchByCategory = searchQuery.find(queryObj)



    const result =await searchByCategory.sort(sort)
    
    return result
}
const getSingleProductData =async(id:string)=>{
   
    const result = await ProductModel.findById({_id:id})
    return result
}
const createProductData =async(payload:TProduct)=>{
    const result = await ProductModel.create(payload)
  
    return result
}
const updateProductData =async(id:string,payload:TProduct)=>{
    console.log(payload)
    const result = await ProductModel.findByIdAndUpdate({_id:id},payload,{new:true})
    console.log(result)
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