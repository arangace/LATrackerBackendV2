"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
// router.get("/", (req, res) => {
//   // Handle GET request for '/users' route
//   return res.send("users 🏓");
// });
router.get("/", userController_1.getDummyData);
exports.default = router;
//# sourceMappingURL=users.js.map