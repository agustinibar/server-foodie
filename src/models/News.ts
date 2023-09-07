import { Schema, Types, model, Model } from "mongoose";
import { News } from "../interfaces/News.interface";

const NewSchema = new Schema<News>(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        source:{
            type:String,
            required:true
        }

    },
    {
        timestamps:true,
        versionKey:false
    }
);

const NewsModel = model('News', NewSchema);

export default NewsModel;

