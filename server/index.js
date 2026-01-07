import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectDb } from "./config/db.js";
import leadRoutes from "./routes/leadRoutes.js";

dotenv.config();
ConnectDb();

const app = express();
const PORT = process.env.PORT || 8080

app.use(cors());
app.use(express.json());

app.use("/api/leads", leadRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
