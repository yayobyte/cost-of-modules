const express = require("express");
const packager = require("package-build-stats");
const router = express.Router();



router.get('/', (req, res) => {
    res.status(400).json({ message: "Please send the :name parameter to search for" });
});

router.get('/:name', async (req, res) => {
    try {
        console.log(req.params.name);
        const package = await packager(req.params.name);
        console.log(package);
        res.json(package);
    }
    catch (error) {
        res.json(error);
    }    
});

module.exports = router;