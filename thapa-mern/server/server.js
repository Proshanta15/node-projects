import dotenv from "dotenv";
import express from "express";
import authRouter from "./router/auth-router.js";
import connectDb from "./utils/db.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);

const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})