import { News } from "../interfaces/News.interface";
import NewsModel from "../models/News";


const insertNews = async(notice:News)=>{
    const responseInsert = await NewsModel.create(notice);
    return responseInsert;
};

export { insertNews }