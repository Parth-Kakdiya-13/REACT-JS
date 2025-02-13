require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser')
const fs = require('fs'); // Add fs module
const nodemailer = require('nodemailer');
const sendgridtransport = require('nodemailer-sendgrid-transport');

const app = express();

const trasnporter = nodemailer.createTransport(
    sendgridtransport({
        auth: {
            api_key: process.env.SENDGRID_API_KEY
        }
    })
)


app.use(cors({
    origin: ['https://react-js-1lqq.vercel.app', 'http://localhost:5173'],
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

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
    const filePath = path.join(__dirname, '../files', fileName); // Adjust path to 'files' folder

    // Log the file path to ensure it's correct
    console.log('File path:', filePath);

    // Check if file exists
    if (!fs.existsSync(filePath)) {
        console.error('File not found:', filePath);
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

app.post('/contact', async (req, res) => {
    const { fullname, email, message } = req.body

    try {
        await trasnporter.sendMail({
            to: email,
            from: 'parthrkakadiya@gmail.com',
            subject: "Message Reveived Successfully",
            html: '<h1>Thanks For Contact me. I will reach to you soon.</h1>'
        })
        await trasnporter.sendMail({
            to: "parthrkakdiya.atmiya13@gmail.com",
            from: 'parthrkakadiya@gmail.com',
            subject: "Someone message you",
            html: `<h1>${fullname}</h1>
                <p>${message}</p>
            `
        })
        res.status(200).json({ message: "data received" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
