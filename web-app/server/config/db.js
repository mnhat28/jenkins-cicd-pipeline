const mongoose = require("mongoose");

const connectDB = async () => {
    const uri = process.env.MONGO_URI || 
        "mongodb://nhat:123456@mongo.default.svc.cluster.local:27017/web-app?authSource=admin";
    
    let retries = 5;
    while (retries) {
        try {
            await mongoose.connect(uri);
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