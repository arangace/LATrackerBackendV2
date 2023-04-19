"use strict";
// import { ObjectId } from "mongodb";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    account: { type: String, required: true },
});
exports.userSchema = userSchema;
//# sourceMappingURL=user.js.map