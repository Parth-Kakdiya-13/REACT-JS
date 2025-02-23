const mongoose = require('mongoose');
const Project = require('../model/project');

exports.createProject = async (req, res) => {
    const { title, description, dueDate } = req.body;

    try {

        let projectDoc = await Project.findOne();

        if (!projectDoc) {
            projectDoc = new Project({ projects: [] });
        }

        projectDoc.projects.push({ title, description, dueDate });

        const savedProject = await projectDoc.save();

        res.status(200).json({ message: savedProject });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getProject = async (req, res) => {
    try {
        const project = await Project.find();
        if (!project) {
            res.status(401).json({ message: "Project not found" })
        }
        res.status(200).json(project)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

exports.getProjectById = async (req, res) => {
    const id = req.params.id; // this should be a string representing an ObjectId

    try {
        // Find the parent document that contains a project with the matching _id
        const projectDoc = await Project.findOne({
            projects: { $elemMatch: { _id: new mongoose.Types.ObjectId(id) } }
        });

        if (!projectDoc) {
            return res.status(404).json({ message: "Project not found" });
        }

        // Extract the specific project item using Array.find()
        const projectItem = projectDoc.projects.find(
            (p) => p._id.toString() === id
        );

        if (!projectItem) {
            return res.status(404).json({ message: "Project item not found" });
        }

        return res.status(200).json(projectItem);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.deleteProject = async (req, res) => {
    const id = req.params.id;
    try {
        // Find the parent document that contains a project with the matching _id
        const projectDoc = await Project.findOne({
            projects: { $elemMatch: { _id: new mongoose.Types.ObjectId(id) } }
        });

        if (!projectDoc) {
            return res.status(404).json({ message: "Project not found" });
        }

        // Filter out the project with the matching _id
        projectDoc.projects = projectDoc.projects.filter(
            project => project._id.toString() !== id
        );

        // Save the updated parent document
        const savedDoc = await projectDoc.save();

        return res.status(200).json({ message: "Project deleted", project: savedDoc });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.createTasks = async (req, res) => {
    const { projectId, task } = req.body;

    if (!projectId || !task) {
        return res.status(400).json({ message: "Missing projectId or task data" });
    }

    try {
        // Find the parent document by its _id
        const projectDoc = await Project.findOne({
            projects: { $elemMatch: { _id: new mongoose.Types.ObjectId(projectId) } }
        });
        projectDoc.projects = projectDoc.projects.find(
            project => project._id.toString() == projectId.toString()
        );

        if (!projectDoc) {
            return res.status(404).json({ message: "Project not found" });
        }

        // Find the specific project inside the projects array if needed.
        // Here, we're assuming you want to add a task to a specific project item.
        // For this example, I'll assume you are adding to the first project in the array.
        // Adjust accordingly if you have a specific way to identify the project.
        const projectItem = projectDoc.projects[0];

        if (!projectItem) {
            return res.status(400).json({ message: "No project available to add a task" });
        }

        // Add the task to the tasks array inside the project item.
        projectItem.tasks.push({ task });

        // Save the updated document.
        const savedDoc = await projectDoc.save();

        return res.status(200).json({ message: "Task added", project: savedDoc });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.getTask = async (req, res) => {
    const projectId = req.params.id
    // console.log(projectId);

    try {

        const projectDoc = await Project.findOne({
            projects: { $elemMatch: { _id: new mongoose.Types.ObjectId(projectId) } }
        })
        projectDoc.projects = projectDoc.projects.find(
            project => project._id.toString() == projectId.toString()
        );

        if (!projectDoc) {
            return res.status(404).json({ message: "Project not found" });
        }
        const projectItem = projectDoc.projects[0];


        if (!projectItem) {
            return res.status(400).json({ message: "No project available to add a task" });
        }

        // Add the task to the tasks array inside the project item.
        const tasks = projectItem.tasks
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ message: error })
    }

}

exports.clearTask = async (req, res) => {
    const { projectId, taskId } = req.params; // assuming you pass both IDs

    try {
        // Find the document that contains the project with the given projectId
        const projectDoc = await Project.findOne({
            projects: { $elemMatch: { _id: new mongoose.Types.ObjectId(projectId) } }
        });
        if (!projectDoc) {
            return res.status(404).json({ message: "Project not found" });
        }

        // Locate the specific project in the projects array
        const projectItem = projectDoc.projects.find(
            project => project._id.toString() === projectId.toString()
        );
        if (!projectItem) {
            return res.status(400).json({ message: "No project available to delete a task" });
        }

        // Remove the task from the tasks array using the taskId
        // Filter out the task with the matching taskId
        projectItem.tasks = projectItem.tasks.filter(
            task => task._id.toString() !== taskId.toString()
        );

        // Save the updated document
        await projectDoc.save();

        return res.status(200).json({ message: "Task deleted" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message || "Server error" });
    }
};


