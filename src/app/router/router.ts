import { Router } from "express";
import { productRoute } from "../../modules/Product/product.router";
import { CartRoute } from "../../modules/Cart/cart.route";


const router = Router()

const moduleRoute = [
    {
        path:'/product',
        route:productRoute
    },
    {
        path:'/cart',
        route:CartRoute
    }
]

moduleRoute.forEach((route)=>router.use(route.path,route.route))

export default router