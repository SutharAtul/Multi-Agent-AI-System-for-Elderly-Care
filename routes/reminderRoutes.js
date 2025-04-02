const express = require("express");
const router = express.Router();

router.post("/set-reminder", (req, res) => {
    const { message, time } = req.body;
    // Logic to store reminder
    res.json({ success: true, message: `Reminder set for ${time}` });
});

module.exports = router;
