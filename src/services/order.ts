
import NewsModel from "../models/News";

const getOrders = async()=>{ 
        const responseNews = await NewsModel.find();
        return responseNews
};

export { getOrders }; 