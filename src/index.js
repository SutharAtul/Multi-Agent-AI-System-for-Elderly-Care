const express = require("express");
const dotenv = require("dotenv");
const reminderRoutes = require("../routes/reminderRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/reminders", reminderRoutes);

app.get("/", (req, res) => {
    res.send("Multi-Agent AI System for Elderly Care API");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
