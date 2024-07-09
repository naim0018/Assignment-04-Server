import {ErrorRequestHandler } from 'express'
import { TErrorSources } from '../interface/error.interface'
import { AppError } from '../error/AppError'



const globalErrorHandler:ErrorRequestHandler  =(err,req,res,next)=>{
    let statusCode = err.statusCode || 500
    let message = err.message || 'Something went wrong'

 
    let errorSources :TErrorSources = [{
        path: '',
        message: message
    }]
    
    if(err instanceof AppError){
        statusCode = err?.statusCode,
        message = err?.message,
        errorSources =[ {
            path:'',
          message:  err?.message
        }]
    }


    return res.status(statusCode).json({
        success:false,
        message,
        errorSources
    })
}

export default globalErrorHandler