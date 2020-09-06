const express = require("express");
const router = express.Router();


router.get('/', (req, res) => {
    res.status(400).json({ message: "Please send the :name parameter to search for" });
});

router.get('/:name', (req, res) => {
    res.json(req.params.name);
});

module.exports = router;