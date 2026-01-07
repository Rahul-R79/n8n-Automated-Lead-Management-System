import express from "express";
import { createLead } from "../controllers/LeadController.js";

const router = express.Router();

router.post("/", createLead);

export default router;
