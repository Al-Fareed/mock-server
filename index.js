const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({ status: "health check, Good" });
});
app.post("/webhook/activate", (req, res) => {
    console.log("Request Body:", JSON.stringify(req.body,null,2)); 
    res.status(200).json({ status: "updated" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
