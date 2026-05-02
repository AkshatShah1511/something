🚀 ✅ COMPLETE STEP-BY-STEP PROCEDURE
🟢 STEP 1 — Repository Setup
Create a repository on GitHub
Name it using your roll number
Clone it locally:
git clone <repo_link>
cd <repo_name>
🟢 STEP 2 — Project Initialization
Initialize Node.js project:
npm init -y
Install required packages:
npm install express axios node-cron dotenv
🟢 STEP 3 — Create Project Structure

Create folders and files:

mkdir logging_middleware
mkdir vehicle_maintenance_scheduler
mkdir notification_app_be

touch notification_system_design.md
touch .gitignore
🟢 STEP 4 — Setup Environment Variables

Create .env file:

TOKEN=your_access_token

👉 Install dotenv (if not already):

npm install dotenv
🟢 STEP 5 — Implement Logging Middleware

📁 logging_middleware/logger.js

Purpose:
Replace console.log
Send logs to external API
Steps:
Import axios
Create log function
Send POST request with:
stack = backend
level = info/error
package = controller/domain
message
🟢 STEP 6 — Authentication Flow
Register using API
Get:
clientID
clientSecret
Generate access token using auth API
Store token in .env

👉 This token is used in logging API calls

🟢 STEP 7 — API Integration

📁 vehicle_maintenance_scheduler/api.js

Steps:
Create base URL
Add Authorization header
Implement:
getDepots()
getVehicles()
🟢 STEP 8 — Scheduler Logic

📁 vehicle_maintenance_scheduler/scheduler.js

Problem:

Maximize impact within mechanic hours

Approach:

Use 0/1 Knapsack Algorithm

Steps:
Fetch depots
Fetch vehicles
For each depot:
Get available hours
Apply knapsack
Calculate max impact
Log:
data fetch
execution
errors
🟢 STEP 9 — Backend Server

📁 notification_app_be/app.js

Steps:
Setup Express server
Add middleware (express.json)
Create routes:
/ → health check
/run-scheduler → trigger scheduler
Add logging inside APIs
🟢 STEP 10 — Notification System Design

📁 notification_system_design.md

Include:
✅ Stage 1 — API Design
REST endpoints for notifications
✅ Stage 2 — Database Design
Use PostgreSQL / MongoDB
✅ Stage 3 — Optimization
Indexing
Efficient queries
✅ Stage 4 — Scaling
Redis caching
Pagination
✅ Stage 5 — Async Processing
Queue (Kafka/RabbitMQ)
Retry mechanism
✅ Stage 6 — Priority Handling
Priority queue
High importance notifications first
🟢 STEP 11 — Testing
🔹 Test Logging
node test.js

✔ Ensures logging API works

🔹 Test Scheduler
node vehicle_maintenance_scheduler/scheduler.js

✔ Outputs max impact

🔹 Test Backend
node notification_app_be/app.js

Open:

http://localhost:3000
🔹 Test API Endpoint
http://localhost:3000/run-scheduler
🟢 STEP 12 — Version Control
git add .
git commit -m "Backend project completed"
git push
🟢 STEP 13 — Final Verification

Ensure:

✔ Logging API used everywhere
✔ Scheduler working
✔ API endpoints working
✔ Design file complete
✔ Repo properly structured

🎯 FINAL PROJECT FLOW
User → API → Scheduler → Optimization → Logs → Output
