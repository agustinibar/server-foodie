import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { deleteNew, getNew, getNews, insertNews, updateNew } from "../services/new";

const getItem = async(req: Request, res: Response)=>{
try {
  const { id } = req.params
  const response = await getNew(id);
  res.send(response)
} catch (error) {
   handleHttp(res, `ERROR_GET_ITEM: ${error}`)
}
};

const getItems = async(req: Request, res: Response)=>{
try {
    const response = await getNews();
    res.send(response);
} catch (error) {
    handleHttp(res, `ERROR_GET_ITEMS: ${error}` )
}
};

const uploadItem = async(req: Request, res: Response)=>{
try {
    const { id } = req.params;
    const  data  = req.body;
    const response = await updateNew(id, data)
    res.send(response)
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
  

const deleteItem = async(req: Request, res: Response)=>{
try {
    const { id } = req.params;
    const response = await deleteNew(id);
    const data = response ? response : "NOT_FOUND"
    res.send(response) 
} catch (error) {
    handleHttp(res, `ERROR_DELETE_ITEM: ${error}`)
}
};

export { getItem, getItems, uploadItem, postItem, deleteItem };