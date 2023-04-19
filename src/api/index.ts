import express from "express";
import { getDummyData } from "../controllers/userController";

const router = express.Router();
router.get("/", (req, res) => {
  // Handle GET request for '/users' route
  return res.end(JSON.stringify({ user: 1 }));
});

// router.get("/", getDummyData);

export default router;
