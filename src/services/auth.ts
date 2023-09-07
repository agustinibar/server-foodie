
import { Auth } from "../interfaces/Auth.interface";
import { User } from "../interfaces/User.interface";
import UserModel from "../models/Users";
import { encrypt, verified } from "../utils/bcrypt.handle";

const registerNewUser = async(authUser: User)=>{
    const checkUser = await UserModel.findOne({email:authUser.email});
    if(checkUser){
        return "The user email already exists"
    };
    
    const passwordHash = await encrypt(authUser.password)
    const newUser = await UserModel.create({
        email:authUser.email,
        name: authUser.name,
        password: passwordHash
    });
    return newUser
};

const loginUser = async({email, password}: Auth)=>{
    const userLog = await UserModel.findOne({ email });
    if(!userLog){
        return "NOT_FOUND_USER"
    };
    const passwordHash = userLog.password
    const isCorrect = await verified(password, passwordHash);

    if(!isCorrect){
        return "PASSWORD INCORRECT";
    };
    
    return isCorrect;
};

export { registerNewUser, loginUser }