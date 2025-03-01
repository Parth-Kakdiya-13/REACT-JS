require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDbStore = require('connect-mongodb-session')(session);
const User = require('./model/user');

const authRoutes = require('./routes/auth/user');
const feedRoutes = require('./routes/feed');
const commentRoutes = require('./routes/comment')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
    cors({
        origin: ["https://my-post-plum.vercel.app", "http://localhost:5173"], // Fixed Typo
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true

    })
);
mongoose.connect(process.env.MONGO_URI).then(result => {
    console.log("mongoDB connected")
}).catch(err => {
    console.log(err)
})

const store = MongoDbStore({
    uri: process.env.MONGO_URI,
    collection: "sessions"
})

app.use(session({
    secret: "secret key",
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
        secure: true, // Use secure cookies in production
        httpOnly: true,
        sameSite: "None",
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
}))

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:5173");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
//     res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     res.header("Access-Control-Allow-Headers", "Content-Type, multipart/form-data");
//     res.header("Access-Control-Allow-Credentials", "true"); // Allow credentials
//     next();
// });

app.use(async (req, res, next) => {
    if (!req.session.user || !mongoose.Types.ObjectId.isValid(req.session.user._id)) {
        return next();
    }
    try {
        const user = await User.findById(req.session.user._id);
        if (!user) {
            return next();
        }
        req.user = user;
        next();
    } catch (err) {
        console.error("Error Retrieving User:", err);
        next();
    }
});

app.get("/auth", (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    res.json({ user: req.session.user });
});


app.use('/feed', feedRoutes);
app.use('/comment', commentRoutes);
app.use('/auth', authRoutes);

app.listen(process.env.PORT);