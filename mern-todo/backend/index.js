import express from "express";
import { collectionName, connection } from "./dbconfig.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/add-task", async (req, res) => {
  const db = await connection();
  const collection = db.collection(collectionName);
  const result = await collection.insertOne(req.body);
  if(result){
    res.send({
      message: "Task added successfully",
      success: true,
      result
    })
  }else{
    res.send({
      message: "Failed to add task",
      success: false
    })
  }
});

app.get("/tasks", async (req, res) => {
  const db = await connection();
  const collection = db.collection(collectionName);
  const result = await collection.find().toArray();
  if(result){
    res.send({
      message: "Tasks retrieved successfully",
      success: true,
      result
    })
  }else{
    res.send({
      message: "Failed to retrieve tasks",
      success: false
    })
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
