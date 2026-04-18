const mongoose = require("mongoose");

const connectDB = async () => {
    let retries = 10;

    while (retries) {
        try {
            await mongoose.connect(
                "mongodb://nhat:123456@mongo:27017/web-app?authSource=admin",
                {
                    serverSelectionTimeoutMS: 5000,
                    socketTimeoutMS: 45000,
                }
            );

            console.log("MongoDB connected");
            return; // thoát luôn
        } catch (err) {
            console.log("MongoDB error:", err.message);

            retries--;
            console.log(`Retrying... (${retries} left)`);

            await new Promise(res => setTimeout(res, 5000));
        }
    }

    throw new Error("Cannot connect to MongoDB after retries");
};

module.exports = connectDB;