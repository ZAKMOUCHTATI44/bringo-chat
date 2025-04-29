import express, { Request, Response } from "express";
import cors from "cors";
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("HEllo world");
});

app.listen(4000, () => {
  console.log("app started");
});
export default app;
