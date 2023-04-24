import { Request, Response } from "express";
import { userSchema } from "../models/user";
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const getAllAccounts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    dotenv.config();

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(
      process.env.DATABASE_URL
    );

    await client.connect();
    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    const collection: mongoDB.Collection = db.collection(
      process.env.COLLECTION_NAME
    );
    const data = await collection.find().toArray();

    console.log(data);
    client.close();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
