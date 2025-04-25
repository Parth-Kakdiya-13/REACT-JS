require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');

const authRoutes = require('./routes/auth/user');
const feedRoutes = require('./routes/feed');
const commentRoutes = require('./routes/comment');
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolver');
const isAuth = require('./middleware/is-auth')

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
app.use((req, res, next) => {
    if (req.method === "OPTION") {
        res.status(200)
    }
    next();
})
app.use((req, res, next) => {
    if (req.method === "GET" && req.url === "/graphql") {
        return next();
    }
    isAuth(req, res, next)
})


app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
    customFormatErrorFn(err) {
        if (!err.originalError) {
            return err
        }
        const data = err.originalError.data;
        const message = err.message || "An error occured"
        const code = err.originalError.code || 500
        return { message: message, status: code, data: data }
    }
}));

mongoose.connect(process.env.MONGO_URI).then(result => {
    console.log("mongoDB connected")
}).catch(err => {
    console.log(err)
});



app.use('/feed', feedRoutes);
app.use('/comment', commentRoutes);
app.use('/auth', authRoutes);

app.listen(process.env.PORT);