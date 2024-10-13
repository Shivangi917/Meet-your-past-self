const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Message", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Mongodb connected');
    } catch (error) {
        console.error('Mongodb connection failed', error);
    }
};

module.exports = connectDB;