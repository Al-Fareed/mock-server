const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const edg = require('./app-routes/edg-routes');

require("dotenv").config();
app.use(bodyParser.json());
app.use(cors());

app.get("/health", (req, res) => {
    res.status(200).json({ status: "health check, Good" });
});

app.post("/webhook/activate", (req, res) => {
    console.log("Request Body:", JSON.stringify(req.body, null, 2));
    res.status(200).json({ status: "updated" });
});
app.use('/edg',edg);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// mongoose.connect(process.env.DATABASE_URL).then(() => {
//     console.log("DB CONNECTED");
// });