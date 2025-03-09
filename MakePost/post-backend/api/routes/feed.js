const express = require('express');
const router = express.Router();
const multer = require('multer')
const feedController = require('../controllers/feed');
const storage = multer.memoryStorage();
const upload = multer({ storage });
const isAuth = require('../middleware/is-auth')


router.post('/post', isAuth, upload.single('image'), feedController.createPost);
router.get('/getAll', feedController.getAll);
router.get('/getPost/:id', feedController.getPost);
router.put('/updatePost/:id', upload.single('image'), feedController.updatePost);
router.delete('/deletePost/:id', feedController.deletePost);

module.exports = router;