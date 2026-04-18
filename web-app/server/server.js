const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const connectDB = require("./config/db");
const User = require("./models/User");

const app = express();

app.use(cors());
app.use(bodyParser.json());

async function startServer() {
    try {
        await connectDB();

        
        app.post("/api/register", async (req, res) => {
            try {
                const { username, password } = req.body;

                const user = new User({ username, password });
                await user.save();

                res.json({ message: "Register success" });
            } catch (err) {
                res.status(500).json({ message: err.message });
            }
        });

        app.post("/api/login", async (req, res) => {
            try {
                const { username, password } = req.body;

                const user = await User.findOne({ username, password });

                if (!user) {
                    return res.status(400).json({ message: "Invalid account" });
                }

                res.json({ message: "Login success" });
            } catch (err) {
                res.status(500).json({ message: err.message });
            }
        });

        app.listen(5000, "0.0.0.0", () => {
            console.log("Server running at port 5000");
        });

    } catch (err) {
        console.error("Fatal error starting server:", err.message);
        process.exit(1);
    }
}

startServer();