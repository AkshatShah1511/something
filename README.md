# Backend Evaluation Project

## 📌 Overview

This project implements a backend system with:

* Logging Middleware (API-based logging)
* Vehicle Maintenance Scheduler (Knapsack optimization)
* Basic Backend Server (Express.js)
* Notification System Design (Stages 1–6)

---

## 🧩 Features

### 🔹 Logging Middleware

* Sends logs to external API instead of console
* Supports levels: `info`, `error`, `debug`, `warn`, `fatal`
* Used across scheduler and API

---

### 🔹 Vehicle Maintenance Scheduler

* Solves optimization using **0/1 Knapsack Algorithm**
* Maximizes vehicle impact within mechanic hour constraints
* Fetches real-time data from APIs:

  * Depots API
  * Vehicles API

---

### 🔹 Backend Server

* Built using Express.js
* Provides API endpoint:

  * `/` → health check
  * `/run-scheduler` → triggers scheduler

---

### 🔹 Notification System Design

Includes:

* API design
* Database design
* Query optimization
* Scaling strategies
* Async processing
* Priority handling

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* Axios
* Node-Cron (for scheduling)

---

## 🚀 Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_ROLLNUMBER.git
cd YOUR_ROLLNUMBER
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Add Environment Variables

Create `.env` file:

```
TOKEN=your_access_token
```

---

### 4. Run Logging Test

```bash
node test.js
```

---

### 5. Run Scheduler

```bash
node vehicle_maintenance_scheduler/scheduler.js
```

---

### 6. Run Backend Server

```bash
node notification_app_be/app.js
```

---

### 7. Open in Browser

```
http://localhost:3000
```

---

## 📡 API Endpoints

| Endpoint         | Method | Description    |
| ---------------- | ------ | -------------- |
| `/`              | GET    | Health check   |
| `/run-scheduler` | GET    | Runs scheduler |

---

## 🧪 Testing

* Logging tested using API calls
* Scheduler tested with real data
* API tested via browser/Postman

---

## ⚠️ Important Notes

* Logging must use API (no console.log for logs)
* Do not expose tokens in public repositories
* Follow proper folder structure

---

## 📂 Project Structure

```
logging_middleware/
vehicle_maintenance_scheduler/
notification_app_be/
notification_system_design.md
.gitignore
```

---

## ✅ Status

✔ Logging Middleware Implemented
✔ Scheduler Implemented
✔ API Integration Completed
✔ Backend Server Running
✔ Design Document Added

---

## 👨‍💻 Author

Akshat Hemal Shah
