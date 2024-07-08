import { Router } from "express";
import { productRoute } from "../../modules/Product/product.router";


const router = Router()

const moduleRoute = [
    {
        path:'/',
        route:productRoute
    }
]

moduleRoute.forEach((route)=>router.use(route.path,route.route))

export default router