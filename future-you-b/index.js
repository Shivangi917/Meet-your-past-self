require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const messageRoutes = require('./routes/message.route');
const cors = require('cors');

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', messageRoutes);

require('./jobs/message.scheduler');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
