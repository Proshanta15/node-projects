import express from "express";
import { homePage, loginPage, registrationPage } from "../controllers/auth-controller.js";

const router = express.Router();

router.route("/").get(homePage);
router.route("/register").post(registrationPage);
router.route("/login").post(loginPage);

export default router;