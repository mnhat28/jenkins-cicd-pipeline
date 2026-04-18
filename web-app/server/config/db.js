const mongoose = require("mongoose");

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

const connectDB = async () => {
    const uri = process.env.MONGO_URI || 
        "mongodb://nhat:123456@mongo:27017/web-app?authSource=admin";

    let retries = 15;

    console.log("Connecting to MongoDB...");

    while (retries > 0) {
        try {
            await mongoose.connect(uri, {
                serverSelectionTimeoutMS: 5000,
                connectTimeoutMS: 5000,
                socketTimeoutMS: 45000,
            });

            console.log("MongoDB connected successfully");
            return;
        } catch (err) {
            console.log("MongoDB connection failed:");
            console.log("->", err.message);

            retries--;

            const delay = Math.min(30000, (16 - retries) * 2000);
            console.log(`Retrying in ${delay / 1000}s... (${retries} attempts left)`);

            await sleep(delay);
        }
    }

    throw new Error("❌ Cannot connect to MongoDB after multiple retries");
};

module.exports = connectDB;