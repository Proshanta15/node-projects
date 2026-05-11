import express from "express";
import { homePage, registrationPage } from "../controllers/auth-controller.js";

const router = express.Router();

router.route("/").get(homePage);
router.route("/register").get(registrationPage);

export default router;