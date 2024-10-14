const express = require('express');
const data = require('../models/data');
const cron = require('node-cron');
const nodemailer = require('nodemailer');
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

        const dateToSchedule = new Date(scheduledDate);

        const cronExpression = `${dateToSchedule.getMinutes()} ${dateToSchedule.getHours()} ${dateToSchedule.getDate()} ${dateToSchedule.getMonth() + 1} *`;

        cron.schedule(cronExpression, async () => {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: process.env.EMAIL_USER,
                  pass: process.env.EMAIL_PASS,
                },
            });
              
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'Dear Self',
                text: message || 'This is a scheduled message',
            };
              
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
             });
        })
        res.status(200).json({ message: 'Email scheduled successfully!' });
    } catch (error) {
        console.error('Failed to schedule the message:', error); // Log error details
        res.status(500).json({ error: 'Failed to schedule the message' });
    }
});

module.exports = router;
