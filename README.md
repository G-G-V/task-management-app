# 📝 Task Manager - Full Stack Web Application

A mini full-stack task management system built with MERN stack and additional tools like Redux, Bootstrap, and jQuery for rich interactivity.

## 🚀 Live Demo

[👉 View Deployed App](https://deployment-link.com)

---

## 🛠️ Tech Stack

### Frontend:
- React
- Redux
- React Router
- Bootstrap 5
- jQuery (for DOM interactions)

### Backend:
- Node.js
- Express
- MongoDB with Mongoose
- CORS + dotenv

---

## 📂 Folder Structure

task-manager-app/
├── client/           # Frontend code
│   ├── pages/        # React pages like Dashboard, AddTask, TaskDetails
│   ├── components/   # Navbar component
│   └── redux/        # Redux setup (store, actions, reducers)
├── server/           # Backend code
│   ├── controllers/  # Task controller functions (CRUD logic)
│   ├── models/       # Mongoose task schema
│   ├── routes/       # Express routes for /api/tasks
│   └── server.js     # Main Express app setup
└── README.md         # Project documentation

---

## 🔧 Running Locally

### 1. Clone the repository:
```bash
git clone https://github.com/G-G-V/task-management-app.git
cd task-management-app

### 2. Setup Backend
```bash
cd server
npm install
touch .env
# Add the following to .env
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager

npm run dev

### 3. Setup Frontend
```bash
cd ../client
npm install
npm start

Frontend runs at: http://localhost:3000
Backend API runs at: http://localhost:5000/api/tasks

---

✅ Features
Create, read, update, delete (CRUD) tasks
Filtered by task status (Pending, In Progress, Completed)
Responsive design using Bootstrap
State managed with Redux
Navigation via React Router
REST API powered by Express and MongoDB

---

📦 Deployment Options
Frontend: Netlify / Vercel

Backend: Render / Railway / Cyclic

---

📄 License
MIT © 2025 Goutham G V

---

## 🚀 Step 23: Deployment (Optional)

Deploying to:

- Netlify or Vercel (React frontend)
- Render or Railway (Node backend)
