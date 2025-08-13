require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const messageRoutes = require('./routes/message.route');

connectDB();

const app = express();
app.use(express.json());

app.use('/api/messages', messageRoutes);

require('./jobs/message.scheduler');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
