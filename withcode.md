🚀 0. WHAT YOU’RE BUILDING
Logging Middleware (calls external API)
Vehicle Scheduler (knapsack)
Backend API (Express)
System Design doc
🟢 STEP 1 — Create Project

mkdir backend-project
cd backend-project
npm init -y
npm install express axios dotenv node-cron

🟢 STEP 2 — Create Folder Structure

mkdir logging_middleware
mkdir vehicle_maintenance_scheduler
mkdir notification_app_be
touch notification_system_design.md
touch .gitignore
touch .env

🟢 STEP 3 — Add .gitignore

node_modules/
.env

🟢 STEP 4 — Add TOKEN (.env)

TOKEN=your_access_token_here
BASE_URL=http://20.207.122.201/evaluation-service

🟢 STEP 5 — LOGGING MIDDLEWARE

📁 logging_middleware/logger.js

require("dotenv").config();
const axios = require("axios");

const log = async (stack, level, pkg, message) => {
    try {
        await axios.post(
            `${process.env.BASE_URL}/logs`,
            {
                stack,
                level,
                package: pkg,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.TOKEN}`,
                    "Content-Type": "application/json"
                },
                timeout: 5000
            }
        );
    } catch (err) {
        console.error("Logging failed:", err.response?.status, err.message);
    }
};

module.exports = log;
🟢 STEP 6 — API FETCH FILE

📁 vehicle_maintenance_scheduler/api.js

require("dotenv").config();
const axios = require("axios");

const headers = {
    Authorization: `Bearer ${process.env.TOKEN}`
};

const getDepots = async () => {
    const res = await axios.get(`${process.env.BASE_URL}/depot`, { headers });
    return res.data;
};

const getVehicles = async () => {
    const res = await axios.get(`${process.env.BASE_URL}/vehicle`, { headers });
    return res.data;
};

module.exports = { getDepots, getVehicles };

🟢 STEP 7 — SCHEDULER (MAIN LOGIC)

📁 vehicle_maintenance_scheduler/scheduler.js

const log = require("../logging_middleware/logger");
const { getDepots, getVehicles } = require("./api");

const knapsack = (tasks, maxHours) => {
    let n = tasks.length;
    let dp = Array(n + 1).fill().map(() => Array(maxHours + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        let { duration, impact } = tasks[i - 1];

        for (let w = 0; w <= maxHours; w++) {
            if (duration <= w) {
                dp[i][w] = Math.max(
                    impact + dp[i - 1][w - duration],
                    dp[i - 1][w]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][maxHours];
};

const runScheduler = async () => {
    try {
        await log("backend", "info", "cron_job", "Fetching data");

        const depots = await getDepots();
        const vehicles = await getVehicles();

        console.log("Depots:", depots);
        console.log("Vehicles:", vehicles);

        depots.depots.forEach((depot) => {
            const maxHours = depot.mechanicHours;

            const tasks = vehicles.vehicles.map(v => ({
                duration: v.duration,
                impact: v.impact
            }));

            const result = knapsack(tasks, maxHours);

            console.log(`Depot ${depot.id} → Max Impact:`, result);
        });

        await log("backend", "info", "domain", "Scheduler completed");

    } catch (err) {
        console.error("Scheduler error:", err.message);
        await log("backend", "error", "domain", "Scheduler failed");
    }
};

runScheduler();

🟢 STEP 8 — BACKEND SERVER

📁 notification_app_be/app.js

require("dotenv").config();
const express = require("express");
const log = require("../logging_middleware/logger");

const app = express();

app.get("/", async (req, res) => {
    await log("backend", "info", "controller", "Root API hit");
    res.send("Backend running");
});

app.get("/run-scheduler", async (req, res) => {
    await log("backend", "info", "controller", "Scheduler API triggered");
    res.send("Check terminal for scheduler output");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

🟢 STEP 9 — SYSTEM DESIGN FILE

📁 notification_system_design.md

# Notification System Design

## Stage 1: API Design
GET /notifications
POST /notifications

## Stage 2: Database
Use PostgreSQL for structured data.

## Stage 3: Optimization
Use indexing on user_id and status.

## Stage 4: Scaling
Use Redis caching and pagination.

## Stage 5: Async Processing
Use RabbitMQ/Kafka for background processing.

## Stage 6: Priority
Use priority queue to serve important notifications first.

🟢 STEP 10 — TESTING
🔹 Test Logging
node -e "require('./logging_middleware/logger')('backend','info','controller','test log')"
🔹 Test Scheduler
node vehicle_maintenance_scheduler/scheduler.js
🔹 Run Backend
node notification_app_be/app.js

Open:

http://localhost:3000
http://localhost:3000/run-scheduler

🟢 STEP 11 — PUSH TO GITHUB
git init
git add .
git commit -m "final backend submission"
git branch -M main
git remote add origin <repo_link>
git push -u origin main

⚠️ FINAL IMPORTANT NOTES
Use correct endpoints:
/logs
/depot
/vehicle
Always send:
Authorization: Bearer TOKEN
