import { Router } from "express";
import { ProductController } from "./product.controller";


const router = Router()

router.get('/',ProductController.getAllProduct)
router.post('/create-product',ProductController.createProduct)
router.put('/:id',ProductController.updateProductData)
router.delete('/:id',ProductController.deleteProductData)

export const productRoute = router