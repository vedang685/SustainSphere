"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registrationController_1 = require("../controller/registrationController");
const express = require("express");
const router = express.Router();
router.post('/individual', registrationController_1.fillIndividualDetails);
exports.default = router;
