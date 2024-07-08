import dotenv from 'dotenv'
import path from 'path'
dotenv.config({path:path.join(process.cwd(),'.env')})

export default {
    port:process.env.port,
    db:process.env.db,
    node_dev :process.env.node_dev,
    // jwt_access_secret : process.env.jwt_access_secret
}