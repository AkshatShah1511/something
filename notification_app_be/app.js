const express = require("express");
const log = require("../logging_middleware/logger");

const app = express();

app.get("/run-scheduler", async (req, res) => {
    await log("backend", "info", "controller", "Scheduler API hit");
    res.send("Scheduler triggered (check console)");
});

app.listen(3000, () => {
    console.log("Server started");
});
