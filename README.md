💸 Expense Tracker - Full Stack Application
A feature-rich Expense Tracker built with the MERN stack (MongoDB, Express, React, Node.js). This app helps users manage their finances by tracking income and expenses, generating summaries, visualizing trends, and even exporting data.

📦 Contents of the ZIP File
The zip file (Expensee - Copy.zip) contains two major folders:

Expensee - Copy/
├── backend/                # Node.js + Express REST API
└── frontend/expense-tracker/ # React + Vite frontend UI

🧠 Features Overview
👤 User Management
Registration & Login with secure JWT-based authentication

Middleware-protected routes for user access control

💰 Expense & Income Management
Add new income/expense entries

Edit and delete transactions

Categorized storage of income and expenses

Upload XLSX files containing income or expense data

View history of transactions with filters

📈 Dashboard & Visualization
View total balance, total income, total expenses

Pie charts and visual breakdowns of income vs expenses

Responsive UI using Tailwind CSS

📂 Data Handling
Upload Excel (.xlsx) files for expenses and incomes

Backend parses and inserts data into MongoDB

Download data from backend if needed (via API)

⚙️ Folder Details
✅ 1. backend/
This folder contains the Node.js + Express backend that provides REST APIs.

Key Files:

server.js: Main server entry

controllers/: Logic for auth, income, expense, dashboard

models/: Mongoose schemas

middleware/: Auth + file upload logic

config/db.js: MongoDB connection

.env: Environment variables (create this yourself)

Dependencies Used:

express, mongoose, jsonwebtoken, multer, cors, bcryptjs, xlsx

✅ 2. frontend/expense-tracker/
This is the React + Vite frontend app with clean, modern UI.

Key Files:

src/components/: All reusable components

src/pages/: Dashboard, Login, Register, etc.

src/utils/apiPaths.js: Contains BASE_URL to your backend

index.html and vite.config.js: For Vite config

Dependencies Used:

axios, tailwindcss, recharts, react-icons, emoji-picker-react, moment

🛠️ Local Setup Guide
1️⃣ Backend Setup
cd backend
npm install

Create a .env file inside backend/:

PORT=8000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret

Start the backend:

npm run dev

Note: Make sure MongoDB Atlas access is set to 0.0.0.0/0 under Network Access for development.

2️⃣ Frontend Setup
cd frontend/expense-tracker
npm install

Update this file:

src/utils/apiPaths.js

Set:

export const BASE_URL = "https://your-backend-url.onrender.com";

Start frontend locally:

npm run dev

☁️ Deployment Guide
Frontend → Vercel
Push your repo to GitHub

Go to https://vercel.com

Import project

Set:

Root: frontend/expense-tracker

Build command: npm run build

Output directory: dist

Click Deploy

Backend → Render
Go to https://render.com

New → Web Service

Set:

Root: backend

Build command: npm install

Start command: node server.js

Add .env variables in dashboard

Deploy and get your backend URL

🔐 Security Notes
All sensitive environment data (DB URI, JWT secret) is kept in .env

Backend uses CORS and Auth middleware to restrict access

MongoDB access is secure with username/password (never exposed in frontend)

Recommended to allow access to MongoDB from specific IPs or use backend-only access

🧪 Example API Endpoints
Base URL: https://your-backend-url.com

Endpoint

Method

Description

/api/auth/register

POST

Register a new user

/api/auth/login

POST

Login and get JWT token

/api/income

POST

Add new income

/api/expense

POST

Add new expense

/api/dashboard

GET

Fetch summary

/api/income/upload

POST

Upload income Excel

/api/expense/upload

POST

Upload expense Excel

📜 Scripts Reference
Backend
npm run dev: Start server with nodemon

npm start: Start server normally

Frontend
npm run dev: Run Vite dev server

npm run build: Create production build

npm run preview: Preview built site

✅ Summary
This project is:

📦 Modular and well-organized

🎨 UI-rich and responsive

🌍 Deployable on modern hosting (Vercel + Render)

🔒 Secure and extensible
