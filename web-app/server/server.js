const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const connectDB = require("./config/db");
const User = require("./models/User");

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());

// connect DB
connectDB();

// API đăng ký
app.post("/api/register", async (req, res) => {
    const { username, password } = req.body;

    const user = new User({ username, password });
    await user.save();

    res.json({ message: "Register success" });
});

// API login
app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password });

    if (!user) {
        return res.status(400).json({ message: "Invalid account" });
    }

    res.json({ message: "Login success" });
});

// chạy server
app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});
