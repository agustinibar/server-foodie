import { Response } from "express";
import { RequestExt } from "../interfaces/req-ext";
import { registerUpload } from "../services/upload";
import { Storage } from "../interfaces/Storage.interface";
import { handleHttp } from "../utils/error.handle";

const getFile = async(req:RequestExt, res:Response)=>{
    try {
        const { user, file } = req;

        const dataToRegister : Storage = {
            fileName: `${file?.filename}`,
            idUser: `${user?.id}`,
            path:`${file?.path}`,
        };
        const response = await registerUpload(dataToRegister);
        res.send(response)
    } catch (error) {
        handleHttp(res, "ERROR_GET_FILE")
    };
};

export { getFile };