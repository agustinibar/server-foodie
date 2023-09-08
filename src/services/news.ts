import { News } from "../interfaces/News.interface";
import NewsModel from "../models/News";


const insertNews = async(notice:News)=>{
    const responseInsert = await NewsModel.create(notice);
    return responseInsert;
};

const getNews = async()=>{
    const responseNews = await NewsModel.find();
   
    return responseNews
};

const getNew = async(id:String)=>{
 const responseNew = await NewsModel.findOne({_id:id});
    return responseNew
};

const updateNew = async(id:String, data: News)=>{
    const responseUpdate = await NewsModel.findOneAndUpdate({_id: id}, data, {new:true});
    console.log(responseUpdate)
    return responseUpdate
};

const deleteNew = async(id:String)=>{
    const response = await NewsModel.deleteOne({_id: id});
    return response
};

export { insertNews, getNews, getNew, updateNew, deleteNew }