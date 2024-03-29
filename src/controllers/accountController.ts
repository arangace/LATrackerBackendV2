import { Request, Response } from "express";
import { userSchema } from "../models/user";
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const getAccountData = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    dotenv.config();

    // const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    //   process.env.DATABASE_URL
    // );

    // await client.connect();
    // const name = req.params.name;
    // const { testingName } = req.params;

    // const db: mongoDB.Db = client.db(process.env.DB_NAME);

    // const collection: mongoDB.Collection = db.collection(
    //   process.env.COLLECTION_NAME
    // );
    // const data = await collection.findOne({ name: name });

    // console.log(data);
    // client.close();
    res.status(200).json("hello");
  } catch (error) {
    res.status(500).send(error);
  }
};
