require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const adminRoutes = require('./routes/admin');
const developerRoutes = require('./routes/developer');
const adminController = require('./controllers/admin');
const cors = require('cors')

const app = express();

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("mongoDb connected")
}).catch((error) => {
    console.log(error)
})

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}))

app.use('/admin', adminRoutes)
app.use('/developer', developerRoutes)
app.post('/login', adminController.postLogin)


app.listen(8080, () => {
    console.log("8080 server start")
})