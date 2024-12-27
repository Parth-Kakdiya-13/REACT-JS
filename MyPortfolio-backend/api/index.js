const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();


app.use(express.json());

const allowedOrigins = [
    "https://portfolio-parths-projects-754f6040.vercel.app",
    "http://localhost:5173"
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            // Allow requests with no origin (like Postman) or from allowed origins
            callback(null, true);
        } else {
            console.error(`CORS error: Origin ${origin} not allowed`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    credentials: true // Allow cookies if required
}));




app.get('/', (req, res) => {
    res.json("hello")
})


// Route to serve a file
app.get('/download/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join(__dirname, 'files', safeFileName);


    // Send the file
    res.download(filePath, fileName, (err) => {
        if (err) {
            console.error('Error while downloading the file:', err);
            res.status(500).send({ message: 'Could not download the file.' });
        }
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
