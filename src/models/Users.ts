import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/User.interface";

const UserSchema = new Schema<User>(
    {
        name:{
            required:true,
            type:String
        },
        password:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        description:{
            type:String,
            default:"Hey! I'm using Foodie!"
        }
    },
    {
        versionKey:false,
        timestamps:true
    }
);

const UserModel = model("users", UserSchema);
export default UserModel