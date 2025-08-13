const Data = require('../models/data');

exports.scheduleMessage = async (req, res) => {
  const { message, email, scheduledDate } = req.body;

  try {
    const newData = new Data({
      message,
      email,
      scheduledDate: new Date(scheduledDate),
    });
    await newData.save();

    res.status(200).json({ message: 'Email scheduled successfully!' });
  } catch (error) {
    console.error('Failed to schedule message:', error);
    res.status(500).json({ error: 'Failed to schedule message' });
  }
};
