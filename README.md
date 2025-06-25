💸 Expense Tracker - Full Stack Application
A full-stack MERN (MongoDB, Express, React, Node.js) application for tracking personal income and expenses. The app allows users to register, log in, add income/expenses, and visualize spending via charts.

📂 Project Structure
Expensee - Copy/
├── backend/ # Express + MongoDB REST API
└── frontend/
└── expense-tracker/ # React + TailwindCSS frontend with Vite

🔧 Tech Stack
🔹 Frontend
React (Vite)

Tailwind CSS

Recharts (Data visualization)

React Router DOM

Axios

Emoji Picker

🔹 Backend
Node.js + Express

MongoDB (via Mongoose)

JWT (Authentication)

Multer (File uploads)

XLSX (Data export)

🚀 Getting Started
✅ Prerequisites
Node.js & npm

MongoDB URI (Atlas or local)

📦 Backend Setup
cd backend
npm install


Create a .env file:

PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret


Run locally:

npm run dev


🎨 Frontend Setup
cd frontend/expense-tracker
npm install


Update src/utils/apiPaths.js:

export const BASE_URL = "https://your-backend-url.com";


Run locally:

npm run dev


Build for production:

npm run build


☁️ Deployment
Frontend (Vercel)
Deploy /frontend/expense-tracker directory

Set build command: npm run build

Set output directory: dist

Backend (Render / Railway)
Deploy /backend

Set build command: npm install

Set start command: node server.js

Add environment variables in dashboard

📊 Features
👤 User Registration and Login

🔐 JWT-based Authentication

💰 Add/Edit/Delete Income and Expenses

📈 Dashboard with Charts (Income vs Expense)

📦 Data upload/download (Excel)

☁️ Cloud-hosted frontend + backend

🗃️ Scripts
Backend
npm start – Start server

npm run dev – Start with nodemon

Frontend
npm run dev – Start Vite dev server

npm run build – Build production app

npm run preview – Preview production build
