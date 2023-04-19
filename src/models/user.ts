// import { ObjectId } from "mongodb";

import { Schema, Mongoose, model, connect } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface IUser {
  account: string;
  name: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  account: { type: String, required: true },
});
export { userSchema };
