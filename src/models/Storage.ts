import { Schema, model } from "mongoose";
import { Storage } from "../interfaces/Storage.interface";

const StorageSchemma = new Schema<Storage>(
    {
        fileName:{
            type:String,
        },
        idUser:{
            type:String,
        },
        path:{
            type:String,
        }
    },
    {
        versionKey: false,
        timestamps:true,
    }
);

const StorageModel = model("Storage", StorageSchemma);
export default StorageModel;
