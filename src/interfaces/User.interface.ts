import { Auth } from "./Auth.interface";

export interface User extends Auth {
    name:string;
    description: string;
};
