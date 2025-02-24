const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

const projectRoutes = require('./routes/project');
const port = 3000;

mongoose.connect('mongodb+srv://parthrkakdiya:prk59595@cluster0.qx5ox.mongodb.net/project').then(() => {
    console.log("mognoDB Connected")
})

const app = express();
app.use(express.json())
app.use(cors({
    origin: ["https://react-js-six-rose.vercel.app", "http://localhost:5173"]
}))



app.use('/', projectRoutes);





app.listen(port, () => {
    console.log(port, "server start")
})