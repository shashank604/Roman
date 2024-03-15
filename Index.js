import express from 'express';
import cors from 'cors';

const app = express();

// Enable CORS for all origins and allow POST requests
app.use(cors());

// Handle POST request to /receive-cookies
app.post('/receive-cookies', (req, res) => {
    // Process the POST request and handle the cookies data
    res.status(200).send('POST request received successfully.');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
