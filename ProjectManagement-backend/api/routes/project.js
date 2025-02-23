const express = require('express');
const projectController = require('../controllers/project')

const router = express.Router();


router.post('/create', projectController.createProject);
router.get('/getProjects', projectController.getProject);
router.get('/getProjectsById/:id', projectController.getProjectById);
router.delete('/deleteProject/:id', projectController.deleteProject);
router.post('/createTask', projectController.createTasks);
router.get('/getTasks/:id', projectController.getTask);
router.delete('/clearTask/:projectId/:taskId', projectController.clearTask);


module.exports = router;