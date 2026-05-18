import dotenv from "dotenv";
import express from "express";
import { errorMiddleware } from "./middlewares/error-middleware.js";
import authRouter from "./router/auth-router.js";
import contactRouter from "./router/contact-router.js";
import connectDb from "./utils/db.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);

app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})