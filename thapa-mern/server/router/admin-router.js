import express from 'express';
import { deleteUserById, getAllContacts, getAllUsers } from '../controllers/admin-controller.js';
import { adminMiddleware } from '../middlewares/adminMiddleware.js';
import { authMiddleware } from '../middlewares/authmiddleware.js';

const router = express.Router();

router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router.route("/contacts").get(authMiddleware, adminMiddleware, getAllContacts);
router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, deleteUserById);

export default router;