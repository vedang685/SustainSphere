import jwt, {JwtPayload} from "jsonwebtoken";

export function generateToken(userId: string): string {
    const expirationTime = Math.floor(Date.now() / 1000) + 86400; // 1 day in seconds
    const payload = {
        user_id: userId,
        exp: expirationTime,
    };

    return jwt.sign(payload, "${process.env.EMAIL_JWT_TOKEN}", { algorithm: 'HS256' });
}

export function verifyToken(token: string): boolean {
    try {
        jwt.verify(token,"${process.env.EMAIL_JWT_TOKEN}", { algorithms: ['HS256'] });
        return true;
    } catch (err) {
        return false;
    }
}

