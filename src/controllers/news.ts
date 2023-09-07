import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertNews } from "../services/New";

const getItem = (req: Request, res: Response)=>{
try {
    
} catch (error) {
   handleHttp(res, `ERROR_GET_ITEM: ${error}`)
}
};

const getItems = (req: Request, res: Response)=>{
try {
    
} catch (error) {
    handleHttp(res, `ERROR_GET_ITEMS: ${error}` )
}
};

const uploadItem = (req: Request, res: Response)=>{
try {
    
} catch (error) {
    handleHttp(res, `ERROR_UPLOAD_ITEMS: ${error}` )
}
};

const postItem = async(req: Request, res: Response) => {
    try {
      const responseNews = await insertNews(req.body);
      res.send(responseNews)
    } catch (error) {
      handleHttp(res, `ERROR_POST_ITEM: ${error}`);
    }
  };
  

const deleteItem = (req: Request, res: Response)=>{
try {
    
} catch (error) {
    handleHttp(res, `ERROR_DELETE_ITEM: ${error}`)
}
};

export { getItem, getItems, uploadItem, postItem, deleteItem };