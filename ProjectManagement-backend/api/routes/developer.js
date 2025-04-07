const express = require('express');
const developerController = require('../controllers/developer');
const auth = require('../middleware/is-auth')

const router = express.Router();


router.get('/mytasks/status', auth, developerController.getMyTasksByStatus);

router.put('/updatestatus/:id', auth, developerController.updateStatus);

module.exports = router;