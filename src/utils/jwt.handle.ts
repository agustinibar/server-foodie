import { sign, verify} from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || "12563";

const generateToken = async(email:string)=>{ 
    const jwt = sign({email}, JWT_SECRET, {expiresIn:"1h"});
    return jwt
};

const verifiedToken = async (jwt: string) => {
    try {
        const isVerified = await verify(jwt, JWT_SECRET);
        return isVerified;
    } catch (error) {
        throw Error("Here is the problem")
    }
};

export { generateToken, verifiedToken}