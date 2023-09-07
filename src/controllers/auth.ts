import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";

const registerCtrl = async(req: Request, res: Response)=>{
    const data = req.body
    const responseUser = await registerNewUser(data);
    res.send(responseUser);
};

const loginCtrl = async(req: Request, res: Response)=>{
    const data = req.body;
    const { email, password } = data;
    const logInUser = await loginUser({ email, password});

    res.send(logInUser)
};

export { registerCtrl, loginCtrl }