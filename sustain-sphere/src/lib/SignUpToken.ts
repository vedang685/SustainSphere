import * as jwt from "jsonwebtoken";
import {JwtPayload} from "jsonwebtoken";
import * as process from "process";

export function generateToken(data: string): string {
    return jwt.sign({data}, process.env.FRONT_END_SECRET as string, {expiresIn: '1h'});
}

export function verifyToken(token: string): string | null {
    try {
        const decodedToken = jwt.verify(token, process.env.FRONT_END_SECRET as string);
        if (typeof decodedToken === 'string') {
            return decodedToken;
        } else {
            return (decodedToken as JwtPayload).data;
        }
    } catch (error) {
        return null;
    }
}
