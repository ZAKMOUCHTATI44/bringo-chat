import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import chatRoutes from "./src/routes/chat"
const app = express();

import dotenv from "dotenv";
dotenv.config();

app.use(bodyParser.json());
app.use("/chat", chatRoutes);

app.get("/",(req:Request , res : Response) => {
  res.send("HElloWORLD")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Bringo AI bot running on port ${PORT}`));


export default app;
