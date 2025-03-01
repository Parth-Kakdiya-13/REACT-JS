const express = require('express');
const commentController = require('../controllers/comment');
const isAuth = require('../middleware/authMiddleware')

const router = express.Router();

router.post('/add', isAuth.isAuthenticated, commentController.createComment);

module.exports = router;