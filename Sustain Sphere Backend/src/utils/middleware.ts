import jwt from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';

export function protect(req: Request, res: Response, next: NextFunction) {
    const secretKey = process.env.SECRET;
    const token = req.headers.authorization?.split(' ')[1];

    if (!secretKey) {
        return res.status(500).json({ status: false, msg: 'Internal Server Error' });
    }

    if (!token) {
        return res.status(401).json({ status: false, msg: 'No Token Provided' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(403).json({ status: false, msg: 'Failed To Authorize' });
        }

        if (!decoded || typeof decoded !== 'object' || !decoded.username) {
            return res.status(403).json({ status: false, msg: 'Invalid Token Format' });
        }

        req.headers.username = decoded.username;
        next();
    });
}
