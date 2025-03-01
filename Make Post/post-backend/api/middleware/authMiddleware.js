exports.isAuthenticated = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized: Please log in first" });
    }
    next();  // User is authenticated, proceed to the next middleware/route
};