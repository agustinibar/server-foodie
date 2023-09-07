    import { Request, Response } from "express"
    import { handleHttp } from "../utils/error.handle"


    const getItemsOrder = async(req: Request, res: Response)=>{
        try {
            res.send("Por fin caralho!");
            
        } catch (error) {
            handleHttp(res, `ERROR_GET_ITEMS_ORDER ${error}`)
        };
    };

    export { getItemsOrder };