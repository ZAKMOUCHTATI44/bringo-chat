import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import chatRoutes from "./routes/chat";

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use("/chat", chatRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Bringo AI bot running on port ${PORT}`));
