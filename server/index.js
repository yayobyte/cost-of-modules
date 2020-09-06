const express = require("express");
const cors = require("cors");
const app = express();
const PORT = require("./config");

// Cors middleware
app.use(cors());

// Dependencies routes middleware
app.use("/dependency", require("./routes/api"));

// Body Parser middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.json({ message: "Working fine" });
});
app.listen(PORT, () => console.log(`Listen port: ${PORT}`));
