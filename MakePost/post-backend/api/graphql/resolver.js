const User = require('../model/user');
const bcrypt = require('bcrypt');
const validate = require('validator')
const jwt = require('jsonwebtoken')
const Post = require('../model/post')

module.exports = {
    createUser: async function ({ userInput }, req) {
        const errors = [];
        if (!validate.isEmail(userInput.email)) {
            errors.push({
                message: "e-mail is not valid",
            })
        }
        if (validate.isEmpty(userInput.password) ||
            !validate.isLength(userInput.password, { min: 5 })) {
            errors.push({
                message: "password too short"
            })
        }

        if (errors.length > 0) {
            const error = new Error("Invalid Input.")
            error.data = errors;
            error.code = 422;
            throw error;
        }

        const existingUser = await User.findOne({ email: userInput.email })
        if (existingUser) {
            throw new Error('User exists already.')
        }

        const hashedPassword = await bcrypt.hash(userInput.password, 12)
        const user = new User({
            name: userInput.name,
            email: userInput.email,
            password: hashedPassword,
        })
        const createdUser = await user.save()
        return {
            ...createdUser._doc,
            _id: createdUser._id.toString()
        }
    },

    loginUser: async function ({ userInput }, req) {
        const errors = [];

        if (!validate.isEmail(userInput.email)) {
            errors.push({ message: "E-mail is invalid" });
        }

        const user = await User.findOne({ email: userInput.email });
        if (!user) {
            errors.push({ message: "Invalid credentials" });
        }

        if (user && !(await bcrypt.compare(userInput.password, user.password))) {
            errors.push({ message: "Invalid credentials" });
        }

        // if (!(await bcrypt.compare(userInput.password, user.password))) {
        //     errors.push({
        //         message: "Invalid Credentials"
        //     })
        // } this code is not work

        if (errors.length > 0) {
            const error = new Error("Login failed.");
            error.data = errors;
            error.code = 401;
            throw error;
        }

        const token = jwt.sign(
            { email: user.email, userId: user._id.toString() },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return {
            token,
            userId: user._id.toString()
        };
    },

    createPost: async function ({ postInput }, req) {
        if (!req.isAuth) {
            const error = new Error("Not Authenticated");
            error.code = 401;
            throw error
        }
        const errors = []
        if (!validate.isLength(postInput.title, { min: 3 })) {
            errors.push({
                message: "title is too short"
            })
        }
        if (!validate.isLength(postInput.content, { min: 10 })) {
            errors.push({
                message: "content is too short"
            })
        }
        if (!validate.isLength(postInput.image, { min: 10 })) {
            errors.push({
                message: "image required"
            })
        }
        if (errors.length > 0) {
            const error = new Error("Post Creation failed.");
            error.data = errors;
            error.code = 422;
            throw error;
        }
        const user = await User.findById(req.userId)
        if (!user) {
            const error = new Error("User Not Found");
            error.code = 404;
            throw error;
        }
        const post = new Post({
            title: postInput.title,
            content: postInput.content,
            image: postInput.image,
            creator: user
        })
        const createdPost = await post.save();
        // user.posts.push(createdPost)
        return {
            ...createdPost._doc,
            _id: createdPost._id.toString(),
            createdAt: createdPost.createdAt.toString(),
            updatedAt: createdPost.updatedAt.toString()
        }
    }

}