const jwt = require('jsonwebtoken');
const User = require('../models/admin');

const protect = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) return res.status(401).json({ message: "Access denied" });

        // Verify JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password"); // Attach user data to request

        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

// Middleware to restrict access based on role
// const authorizeRoles = (...allowedRoles) => {
//     return (req, res, next) => {
//         if (!allowedRoles.includes(req.user.role)) {
//             return res.status(403).json({ message: "Access denied" });
//         }
//         next();
//     };
// };

module.exports = { protect };
