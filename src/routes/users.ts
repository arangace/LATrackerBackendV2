import express from "express";
import { getDummyData } from "../controllers/userController";

const router = express.Router();
// router.get("/", (req, res) => {
//   // Handle GET request for '/users' route
//   return res.send("users 🏓");
// });

router.get("/", getDummyData);

export default router;
