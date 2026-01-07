import { Lead } from "../models/Lead.js";
import axios from "axios";

export const createLead = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res
                .status(400)
                .json({ success: false, message: "All fields are required" });
        }

        const newLead = new Lead({ name, email, message });
        await newLead.save();

        // n8n Webhook
        const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
        if (n8nWebhookUrl) {
            try {
                await axios.post(n8nWebhookUrl, {
                    name,
                    email,
                    message,
                    date: new Date(),
                });
            } catch (webhookError) {
                console.error(
                    "Error triggering n8n webhook:",
                    webhookError.message
                );
            }
        }

        res.status(201).json({
            success: true,
            message: "Lead submitted successfully",
            data: newLead,
        });
    } catch (error) {
        console.error("Error creating lead:", error);
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
};
