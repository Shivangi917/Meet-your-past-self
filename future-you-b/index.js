const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const dataRoute = require('./routes/dataRoute');
const cors = require('cors');  // Import CORS

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());  // Enable CORS for all routes
app.use(express.json());

connectDB();

app.use('/', dataRoute);

app.get('/', (req, res) => {
    res.send("hello");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
