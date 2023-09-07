import { hash, compare } from "bcryptjs";

const encrypt = async(pass:string, )=>{
    const passwordHash = await hash(pass, 8);
    return passwordHash
};

const verified = async(pass:string, passwordHash: string)=>{
    const verifiedPassword = await compare(pass, passwordHash);
    return verifiedPassword;
};

export { encrypt, verified }