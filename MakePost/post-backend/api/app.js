require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');
// const session = require('express-session');
// const MongoDbStore = require('connect-mongodb-session')(session);

const User = require('./model/user');
const authRoutes = require('./routes/auth/user');
const feedRoutes = require('./routes/feed');
const commentRoutes = require('./routes/comment')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
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

// const store = new MongoDbStore({
//     uri: process.env.MONGO_URI,
//     collection: "sessions"
// })

// store.on('error', function (error) {
//     console.error("SESSION STORE ERROR:", error);
// });

// app.use(session({
//     secret: "your secret key",
//     resave: false,
//     saveUninitialized: false,
//     store: store,
//     cookie: {
//         secure: true,
//         httpOnly: true,
//         sameSite: "None",
//         maxAge: 1000 * 60 * 60 * 24
//     }
// }))

// app.use(async (req, res, next) => {
//     if (!req.session.user || !mongoose.Types.ObjectId.isValid(req.session.user._id)) {
//         return next();
//     }
//     try {
//         const user = await User.findById(req.session.user._id);
//         if (!user) {
//             return next();
//         }
//         req.user = user;
//         next();
//     } catch (err) {
//         console.error("Error Retrieving User:", err);
//         next();
//     }
// });

app.use('/feed', feedRoutes);
app.use('/comment', commentRoutes);
app.use('/auth', authRoutes);

app.listen(process.env.PORT);