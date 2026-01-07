import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectDb } from "./config/db.js";

dotenv.config();
ConnectDb();

const app = express();
const PORT = process.env.PORT || 8080

app.use(cors());
app.use(express.json());

import leadRoutes from "./routes/leadRoutes.js";
app.use("/api/leads", leadRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
