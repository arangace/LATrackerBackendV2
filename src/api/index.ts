import express from "express";
import { getAccountData } from "../controllers/accountController";
import { getAllAccounts } from "../controllers/getAllAccounts";

const router = express.Router();

router.use("/getAccount/:name", getAccountData);
// router.use("/", getAllAccounts);

export default router;
