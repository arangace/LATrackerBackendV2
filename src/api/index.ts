import express from "express";
import { getAccountData } from "../controllers/accountController";

const router = express.Router();

router.use("/", getAccountData);

export default router;
