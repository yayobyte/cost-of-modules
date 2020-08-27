const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

const bundles = [
    {
        id: 0,
        name: "reactjs",
    },
    {
        id: 1,
        name: "reduxjs",
    },
    {
        id: 2,
        name: "axios",
    },
];

app.get('/', (req, res) => {
    res.json(bundles);
});

app.listen(PORT, () => console.log(`Listen port: ${PORT}`));
