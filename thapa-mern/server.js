import express from "express";
import authRouter from "./router/auth-router.js";

const app = express();

app.use("/api/auth", authRouter);

const PORT = 5000;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})