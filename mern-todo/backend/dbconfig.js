import { MongoClient } from "mongodb";

const url ="mongodb+srv://prosantoroy166_db_user:mIoXYDYD8gnNgKgZ@cluster0.iyoerbw.mongodb.net/?appName=Cluster0";
const dbName = "node-project";
export const collectionName = "todo";
const client = new MongoClient(url);

export const connection = async () => {
  const connect = await client.connect();
  return await connect.db(dbName);
};
