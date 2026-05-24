import Contact from "../models/contact-model.js";
import User from "../models/user-model.js";

// Controller function to get all users
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({},{password: 0});
        if(!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        return res.status(200).json(users );
    } catch (error) {
        next(error);
    }
}

// Controller function to get all contacts
const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find({});
        if(!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No contacts found" });
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
}

export { getAllUsers, getAllContacts };