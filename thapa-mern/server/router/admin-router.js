import express from 'express';
import { getAllContacts, getAllUsers } from '../controllers/admin-controller.js';
import { authMiddleware } from '../middlewares/authmiddleware.js';
import { adminMiddleware } from '../middlewares/adminMiddleware.js';

const router = express.Router();

router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router.route("/contacts").get(authMiddleware, adminMiddleware, getAllContacts);

export default router;