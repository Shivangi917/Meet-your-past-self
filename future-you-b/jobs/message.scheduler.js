const cron = require('node-cron');
const Msg = require('../models/message.model');
const transporter = require('../config/email');

cron.schedule('* * * * *', async () => {
  const now = new Date();
  const dueMessages = await Msg.find({ scheduledDate: { $lte: now }, sent: false });

  for (let msg of dueMessages) {
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: msg.email,
        subject: 'Dear Self',
        text: msg.message,
      });

      msg.sent = true;
      await msg.deleteOne();

      console.log(`Email sent to ${msg.email}`);
    } catch (err) {
      console.error(`Failed to send email to ${msg.email}:`, err);
      msg.status = "Failed";
      await msg.save();
    }
  }
});
