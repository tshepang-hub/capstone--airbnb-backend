const express = require('express');
const router = express.Router();

// Example endpoint to fetch data
router.get('/data', (req, res) => {
    // Fetch data from MongoDB or any other source
    const data = { message: 'Hello from the backend!' };
    res.json(data);
});

module.exports = router;