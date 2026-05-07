import express from "express";
import { collectionName, connection } from "./dbconfig.js";
import cors from "cors";
import { ObjectId } from "mongodb";

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

app.delete("/delete/:id", async (req, res) => {
  const db = await connection();
  const collection = db.collection(collectionName);
  const result = await collection.deleteOne({_id: new ObjectId(req.params.id)});
  if(result){
    res.send({
      message: "Task deleted successfully",
      success: true,
      result
    })
  }else{
    res.send({
      message: "Failed to delete task",
      success: false
    })
  }
});

app.get("/task/:id", async (req, res) => {
  const db = await connection();
  const collection = db.collection(collectionName);
  const result = await collection.findOne({_id: new ObjectId(req.params.id)});
  if(result){
    res.send({
      message: "Task retrieved successfully",
      success: true,
      result
    })
  }else{
    res.send({
      message: "Failed to retrieve task",
      success: false
    })
  }
});

app.put("/update-task", async (req, res) => {
  const db = await connection();
  const collection = db.collection(collectionName);
  const { _id, ...updateData } = req.body;
  const update = { $set: updateData };
  const result = await collection.updateOne({ _id: new ObjectId(_id) }, update);
  if(result){
    res.send({
      message: "Task updated successfully",
      success: true,
      result
    })
  }else{
    res.send({
      message: "Failed to update task",
      success: false
    })
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
