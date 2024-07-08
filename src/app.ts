
import express, { Request, Response } from 'express'
import cors from 'cors'
import { StatusCodes } from 'http-status-codes'
import router from './app/router/router'
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api',router)

app.get('/',(req:Request,res:Response)=>{
    res.status(StatusCodes.OK).json({
        success:true,
        message:"Server connected",
        data:"Server is Running"
    })
})



export default app