const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs'); // Add fs module

const app = express();


app.use(cors({
    origin: ['https://portfolio-parths-projects-754f6040.vercel.app/', 'http://localhost:5173'],
    methods: ['GET', 'POST'],
    credentials: true
}));

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*'); // Update with your origins if needed
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });



app.get('/', (req, res) => {
    res.json("hello")
})


// Route to serve a file
app.get('/download/:fileName', (req, res) => {
    const fileName = req.params.fileName; // Get the file name from the request params
    const filePath = path.join(__dirname, 'files', fileName); // Adjust this to the actual directory of your files
    // Check if file exists
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        return res.status(404).send({ message: 'File not found.' });
    }
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
