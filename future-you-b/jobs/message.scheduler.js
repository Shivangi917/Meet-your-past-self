const cron = require('node-cron');
const Data = require('../models/data');
const transporter = require('../config/email');

cron.schedule('* * * * *', async () => {
  const now = new Date();
  const dueMessages = await Data.find({ scheduledDate: { $lte: now }, sent: false });

  for (let msg of dueMessages) {
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: msg.email,
        subject: 'Dear Self',
        text: msg.message,
      });

      msg.sent = true;
      msg.status = "Sent";
      await msg.save();

      console.log(`Email sent to ${msg.email}`);
    } catch (err) {
      console.error(`Failed to send email to ${msg.email}:`, err);
      msg.status = "Failed";
      await msg.save();
    }
  }
});
