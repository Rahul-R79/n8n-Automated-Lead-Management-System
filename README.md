# n8n Automated Lead Management System

A robust full-stack solution designed to capture, manage, and automate lead processing. This project integrates a React frontend with a Node.js backend and leverages **n8n** workflows for advanced automation tasks like data syncing (Google Sheets) and notifications (Discord & Email).

## 🚀 Features

-   **Modern Frontend:** Built with React (Vite) and styled with TailwindCSS v4 for a responsive, high-performance UI.
-   **Secure Backend:** Node.js & Express REST API to handle lead submissions securely.
-   **Database Storage:** MongoDB integration to persistently store every lead.
-   **n8n Automation:** Seamless integration with n8n webhooks to trigger complex workflows instantly upon form submission.
-   **Type Safety:** TypeScript support on the client-side for robust development.

## 🛠️ Tech Stack

### Client

-   **Framework:** React (Vite)
-   **Language:** TypeScript
-   **Styling:** TailwindCSS v4
-   **HTTP Client:** Axios

### Server

-   **Runtime:** Node.js
-   **Framework:** Express.js
-   **Database:** MongoDB (Mongoose)
-   **Utilities:** Dotenv, CORS, Axios

### Automation

-   **Workflow Engine:** n8n (Webhooks, Google Sheets, Discord & Email integration)

## 📂 Project Structure

```bash
n8n-automated-lead-management-system/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/     # UI Components (e.g., LeadForm)
│   │   └── ...
│   └── ...
├── server/                 # Backend API
│   ├── config/             # DB Configuration
│   ├── controllers/        # Request Logic
│   ├── models/             # Mongoose Schemas
│   ├── routes/             # API Routes
│   └── ...
└── README.md
```

## ⚙️ Installation & Setup

### Prerequisites

-   Node.js installed on your machine.
-   MongoDB instance (Local or Atlas).
-   n8n instance (Self-hosted or Cloud).

### 1. Clone the Repository

```bash
git clone https://github.com/Rahul-R79/n8n-Automated-Lead-Management-System.git
cd n8n-Automated-Lead-Management-System
```

### 2. Backend Setup

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
N8N_WEBHOOK_URL=your_n8n_webhook_url
```

Start the server:

```bash
npm run dev
```

### 3. Frontend Setup

Open a new terminal, navigate to the client directory, and install dependencies:

```bash
cd client
npm install
```

Create a `.env` file in the `client` directory:

```env
VITE_BACKEND_URL=http://localhost:8080
```

Start the client (Vite):

```bash
npm run dev
```

## 🔄 How It Works

1.  **Submission:** The user fills out the lead form on the frontend.
2.  **API Call:** The data is sent to the Express backend (`/api/leads`).
3.  **Persistence:** The backend saves the lead to MongoDB.
4.  **Automation:** The backend triggers the configured n8n Webhook.
5.  **Automation Workflow:** n8n executes a powerful sequence:
    -   **Google Sheets:** Instantly records the lead details in a spreadsheet.
    -   **Discord Alert:** Sends a real-time notification to your team via a Discord bot.
    -   **Email Response:** Dispatches a personalized confirmation email to the user.

![n8n Automation Flow](client/public/images/automation%20flow.png)

## 👋 Conclusion

Thank you for checking out the n8n Automated Lead Management System! This project showcases the power of integrating custom code with automation platforms to streamline business processes.

Happy Coding! 🚀
