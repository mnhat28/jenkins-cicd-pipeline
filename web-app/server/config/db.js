const mongoose = require("mongoose");

const connectDB = async () => {
    let retries = 5;

    while (retries) {
        try {
            await mongoose.connect("mongodb://nhat:123456@mongo:27017/web-app?authSource=admin");
            console.log("MongoDB connected");
            break;
        } catch (err) {
            console.log("MongoDB not ready, retrying...");
            retries--;
            await new Promise(res => setTimeout(res, 5000));
        }
    }
};

module.exports = connectDB;
