import express, { Request, Response } from "express";
import usersRouter from "./routes/users";
import api from "./api/index";
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 8080;

app.use("/users", usersRouter);
app.use("/api", api);

export const collections: { users?: mongoDB.Collection } = {};
export async function connectToDatabase() {
  dotenv.config();

  try {
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(
      process.env.DATABASE_URL
    );

    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    const collection: mongoDB.Collection = db.collection(
      process.env.COLLECTION_NAME
    );

    collections.users = collection;

    console.log(
      `Successfully connected to database: ${db.databaseName} and collection: ${collection.collectionName}`
    );
  } catch (err) {
    console.log(err);
    return;
  }
}
connectToDatabase();

app.get("/", (_req: Request, res: Response) => {
  return res.send("Express and Typescript on Vercel");
});

app.get("/ping", (_req: Request, res: Response) => {
  return res.send("pong 🏓");
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
export default app;
