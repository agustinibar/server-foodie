import { Storage } from "../interfaces/Storage.interface";
import StorageModel from "../models/Storage";

const registerUpload = async({fileName, idUser, path}: Storage)=>{
    const responseItem = await StorageModel.create({ fileName, idUser, path});

    return responseItem;
};

export { registerUpload };
