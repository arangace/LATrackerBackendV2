import express, { Request, Response } from "express";
import usersRouter from "./routes/users";
import api from "./api/index";

const app = express();
const port = process.env.PORT || 8080;

app.use("/users", usersRouter);
app.use("/api", api);

app.get("/", (_req: Request, res: Response) => {
  return res.send("Express and Typescript on Vercel");
});

app.get("/ping", (_req: Request, res: Response) => {
  return res.send("pong 🏓");
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
export default app;
