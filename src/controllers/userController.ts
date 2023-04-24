// userController.ts
import { Request, Response } from "express";

// Get some dummy data
export const getDummyData = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = [
      { _id: "1", name: "Alice", email: "alice@example.com" },
      { _id: "2", name: "Bob", email: "bob@example.com" },
      { _id: "3", name: "Charlie", email: "charlie@example.com" },
    ];
    const result = users.filter((user) => user.name === req.params.name);
    res.status(200).json("hello");
    // res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
