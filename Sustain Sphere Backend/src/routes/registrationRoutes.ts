import {fillIndividualDetails} from "../controller/registrationController";

const express = require("express")
const router = express.Router();

router.post('/individual', fillIndividualDetails)

export default router;
