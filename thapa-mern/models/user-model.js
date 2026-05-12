import mongoose from "mongoose";

// Define a schema for the user 
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

// Create a model based on the schema
const User = new mongoose.model("User", userSchema);

export default User;