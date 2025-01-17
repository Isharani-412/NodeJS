const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint to handle user credentials
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simple validation
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    // You would typically handle authentication here
    // For now, we'll just respond with a success message

     return res.status(200).json({ message: 'Login successful' });

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}  `);
});







































// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
