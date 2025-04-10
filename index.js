const express = require("express");
const app = express();

app.use(express.json());

app.post("/update", (req, res) => {
    console.log("Request Body:", JSON.stringify(req.body,null,2)); 
    res.json({ status: "updated" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
