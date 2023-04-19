"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    // Handle GET request for '/users' route
    return res.end(JSON.stringify({ user: 1 }));
});
// router.get("/", getDummyData);
exports.default = router;
//# sourceMappingURL=index.js.map