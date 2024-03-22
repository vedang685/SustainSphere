const express = require("express")
const router = express.Router();
import {signin, me, registerNewUser, detailsFilled} from '../controller/userController'
import { protect } from '../utils/middleware';
import { verifyEmail} from "../middleware/VerifyEmail";

router.post('/signin', signin);
router.post('/signup', registerNewUser);
router.get('/me',protect, me);
router.get('/verifyEmail/',verifyEmail)
router.post('/detailsFilled', detailsFilled)

export default router;
