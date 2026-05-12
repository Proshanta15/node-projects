import express from "express";
import { homePage, registrationPage } from "../controllers/auth-controller.js";

const router = express.Router();

router.route("/").get(homePage);
router.route("/register").post(registrationPage);

export default router;