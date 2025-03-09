const User = require('../../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.postSignup = async (req, res) => {
    const { email, name, password } = req.body;
    try {
        const isUser = await User.findOne({ email: email });
        if (isUser) {
            console.log(isUser);
            return res.status(401).json({ message: "user already exits." });
        }
        const hashpassword = await bcrypt.hash(password, 12);
        const user = new User({ email, name, password: hashpassword });
        await user.save();
        res.status(200).json({ message: req.body })
    } catch (error) {
        res.status(500).json({ message: error });
    }
}


exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const isUser = await User.findOne({ email });
        if (!isUser) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }
        const isMatch = await bcrypt.compare(password, isUser.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }
        const token = jwt.sign({ email: isUser.email, userId: isUser._id.toString() }, "$-#Prk595959")
        res.status(200).json({ message: "User logged in", token: token, userId: isUser._id.toString() });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.postLogout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            res.status(500).josn({ message: err })
        } else {
            res.json({ message: "Logged out successfully" });
        }
    })
}
