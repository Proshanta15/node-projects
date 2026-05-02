import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import path from "path";
import { fileURLToPath } from "url";

// To get the current directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create an Express application
const app = express();
// Set EJS as the view engine and configure middleware
app.set("view engine", "ejs");
// Middleware to parse URL-encoded bodies and serve static files
app.use(express.urlencoded({ extended: false }));
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// MongoDB connection details
const url = "mongodb://127.0.0.1:27017";
const dbName = "node-project";
const collectionName = "todo";
const client = new MongoClient(url);

// Function to connect to MongoDB and return the database instance
const connection = async () => {
  try {
    const connect = await client.connect();
    console.log("Connected to MongoDB");
    return await connect.db(dbName);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

app.get("/", async (req, res) => {
  const db = await connection();
  const collection = db.collection(collectionName);
  const result = await collection.find().toArray();
  res.render("list", { result });
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/add", async (req, res) => {
  const db = await connection();
  const collection = db.collection(collectionName);
  const result = await collection.insertOne(req.body);
  if (result) {
    res.redirect("/");
  } else {
    res.redirect("/add");
  }
});

app.get("/update/:id", async (req, res) => {
  const db = await connection();
  const collection = db.collection(collectionName);
  const result = await collection.findOne({ _id: new ObjectId(req.params.id) });
  if (result) {
    res.render("update", { result });
  } else {
    res.send("Error updating item");
  }
});
app.post("/update/:id", async (req, res) => {
  const db = await connection();
  const collection = db.collection(collectionName);
  const filter = { _id: new ObjectId(req.params.id) };
  const updateData = {
    $set: { title: req.body.title, description: req.body.description },
  };
  const result = await collection.updateOne(filter, updateData);
  if (result) {
    res.redirect("/");
  } else {
    res.send("Error updating item");
  }
});

app.get("/delete/:id", async (req, res) => {
  const db = await connection();
  const collection = db.collection(collectionName);
  const result = await collection.deleteOne({
    _id: new ObjectId(req.params.id),
  });
  if (result) {
    res.redirect("/");
  } else {
    res.send("Error deleting item");
  }
});

app.post("/multi-delete", async (req, res) => {
  const db = await connection();
  const collection = db.collection(collectionName);
  let selectedTask = undefined;
  if (Array.isArray(req.body.selectedTask)) {
    selectedTask = req.body.selectedTask.map((id) => new ObjectId(id));
  } else {
    selectedTask = [new ObjectId(req.body.selectedTask)];
  }
  const result = await collection.deleteMany({ _id: { $in: selectedTask } });
  if (result) {
    res.redirect("/");
  } else {
    res.send("Error deleting items");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
