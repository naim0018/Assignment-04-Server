import { Router } from "express";
import { CartController } from "./cart.controller";

const router = Router()

router.post(`/add-cart/:id`,CartController.createCart)
router.get(`/`,CartController.getAllCart)

export const CartRoute = router