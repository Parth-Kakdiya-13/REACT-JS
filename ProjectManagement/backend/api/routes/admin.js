const express = require('express');
const adminController = require('../controllers/admin');
const protect = require('../middleware/authmiddleware');
const auth = require('../middleware/is-auth')

const router = express.Router();


router.post('/signup', adminController.postSignup);
// router.post('/login', adminController.postLogin);
router.post('/assigntask', auth, adminController.postTask);

router.get('/getDeveloper', auth, adminController.getDeveloper);
router.get('/getTasks', auth, adminController.getTasks);

module.exports = router;