import express from "express";
const router = express.Router();
router.get("/", (req, res) => {
  // Handle GET request for '/users' route
  return res.send("users 🏓");
});

router.post("/", (req, res) => {
  // Handle POST request for '/users' route
});
export default router;
