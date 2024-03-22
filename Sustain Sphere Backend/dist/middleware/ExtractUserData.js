"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
// const authenticateJwt = (req : Request, res : Response, next : NextFunction) => {
//     const authHeader = req.headers.authorization;
//     if (authHeader) {
//         const token = authHeader.split(' ')[1];
//         jwt.verify(token, SECRET, (err : any, user) => {
//             if (err) {
//                 return res.sendStatus(403);
//             }
//             req.user = user;
//             next();
//         });
//     } else {
//         res.sendStatus(401);
//     }
// };
