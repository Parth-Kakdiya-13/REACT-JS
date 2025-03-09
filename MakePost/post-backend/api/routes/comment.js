const express = require('express');
const commentController = require('../controllers/comment');
const isAuth = require('../middleware/is-auth')

const router = express.Router();

router.post('/add', isAuth, commentController.createComment);

module.exports = router;