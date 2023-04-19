"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const index_1 = __importDefault(require("./api/index"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use("/users", users_1.default);
app.use("/api", index_1.default);
app.get("/", (_req, res) => {
    return res.send("Express and Typescript on Vercel");
});
app.get("/ping", (_req, res) => {
    return res.send("pong 🏓");
});
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map