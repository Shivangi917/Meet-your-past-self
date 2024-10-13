const express = require('express');
const data = require('../models/data');
const router = express.Router();

router.post('/schedule', async (req, res) => {
    const { message, email, scheduledDate } = req.body;

    try {
        const newData = new data({
            message,
            email,
            scheduledDate: new Date(scheduledDate), // Correct variable usage
        });
        await newData.save();

        res.status(200).json({ message: 'Email scheduled successfully!' });
    } catch (error) {
        console.error('Failed to schedule the message:', error); // Log error details
        res.status(500).json({ error: 'Failed to schedule the message' });
    }
});

module.exports = router;
