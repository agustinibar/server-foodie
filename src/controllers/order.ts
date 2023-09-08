import { Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { RequestExt } from "../interfaces/req-ext";


    const getItemsOrder = async(req: RequestExt, res: Response)=>{
        try {
            res.send({
                data: "Por fin caralho!",
                user: req.user
        });
            
        } catch (error) {
            handleHttp(res, `ERROR_GET_ITEMS_ORDER ${error}`)
        };
    };

    export { getItemsOrder };