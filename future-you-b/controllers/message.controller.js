const Msg = require('../models/message');

exports.scheduleMessage = async (req, res) => {
  const { message, email, scheduledDate } = req.body;

  try {
    const newMsg = new Msg({
      message,
      email,
      scheduledDate: new Date(scheduledDate),
    });
    await newMsg.save();

    res.status(200).json({ message: 'Email scheduled successfully!' });
  } catch (error) {
    console.error('Failed to schedule message:', error);
    res.status(500).json({ error: 'Failed to schedule message' });
  }
};
