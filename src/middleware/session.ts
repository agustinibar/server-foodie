import { NextFunction, Response } from "express";
import { verifiedToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/req-ext";

const checkJwt = async (req: RequestExt, res:Response, next: NextFunction)=>{
    try {
        const jwtUser = req.headers.authorization || ''
        const jwt = jwtUser.split(' ').pop();
        const verificate = await verifiedToken(`${jwt}`)
        console.log({jwt});
        console.log(verificate);

        if (!verificate){
            res.status(401)
            res.send("JWT_NOT_VALID")
        } else {
            next()
        }
        
    } catch (error) {
        res.status(400)
        res.send(`You don't have access`)
    }
};

export { checkJwt };