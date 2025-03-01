const express = require('express');
const authController = require('../../controllers/auth/user')

const router = express.Router();


router.post('/signup', authController.postSignup);
router.post('/login', authController.postLogin);
router.post('/logout', authController.postLogout);

module.exports = router;