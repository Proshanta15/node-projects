import express from "express";
import { collectionName, connection } from "./dbconfig.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/add-task", async (req, res) => {
  const db = await connection();
  const collection = db.collection(collectionName);
  const result = await collection.insertOne(req.body);
  res.send("Task added!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
