const User = require('../models/admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Task = require('../models/task')

exports.postSignup = async (req, res) => {
    const { name, email, password, designation } = req.body;
    try {
        let user = await User.findOne({ email: email })
        if (user) {
            return res.status(403).json({ message: "user already exists." })
        }
        const hashPassword = await bcrypt.hash(password, 12)
        user = new User({ name, email, password: hashPassword, designation })
        await user.save();
        res.status(200).json({ data: user, message: "user created" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.postLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(401).json({ message: "invalid credentials" })
        }
        const compare = await bcrypt.compare(password, user.password);
        if (!compare) {
            return res.status(401).json({ message: "invalid credentials" })
        }
        const token = jwt.sign({ email: user.email, id: user._id.toString() }, process.env.JWT_SECRET)
        res.status(200).json({ message: "login successfully", token: token, userId: user._id.toString(), role: user.role })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.postTask = async (req, res) => {
    const { title, description, assignedTo, date, createdBy } = req.body;
    try {
        const task = new Task({ title, description, assignedTo, date, createdBy })
        await task.save()
        res.status(200).json({ message: "task assigned" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getDeveloper = async (req, res) => {
    try {
        const developer = await User.find({ role: "developer" });
        res.status(200).json({ message: "get developers", data: developer })
    } catch (error) {
        res.stauts(500).json({ message: error.message })
    }
}

exports.getTasks = async (req, res) => {
    try {
        const task = await Task.find()
            .sort({ createdAt: -1 })
            .populate("assignedTo", "name")
            .populate("createdBy", "name")

        if (!task) {
            return res.status(401).json({ messgae: "task not found" })
        }
        res.status(200).json({ success: true, message: "tasks fetched", data: task })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}